import express from 'express';
import Booking from '../models/Booking.js';
import Appointment from '../models/Appointment.js';

const router = express.Router();

// Create booking
router.post('/', async (req, res) => {
  try {
    console.log('📝 Received booking data:', req.body);

    // Validate required fields
    const requiredFields = ['petName', 'petType', 'ownerName', 'email', 'phone', 'serviceId', 'serviceName', 'date', 'time'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      console.log('❌ Missing fields:', missingFields);
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Create booking
    const booking = new Booking(req.body);
    console.log('📋 Attempting to save booking:', booking);

    // Save booking
    const savedBooking = await booking.save();
    console.log('✅ Booking saved successfully:', savedBooking);

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking: savedBooking
    });

  } catch (error) {
    console.error('❌ Server Error:', error);
    
    if (error.name === 'ValidationError') {
      console.log('❌ Validation Error:', error.errors);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: Object.values(error.errors).map(err => err.message)
      });
    }

    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the booking',
      error: error.message
    });
  }
});

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    console.log('📚 Retrieved bookings:', bookings.length);
    res.json(bookings);
  } catch (error) {
    console.error('❌ Error fetching bookings:', error);
    res.status(500).json({ message: error.message });
  }
});

// AI Assistant route for pet care advice
router.post('/ai-assistant', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: 'Prompt is required'
      });
    }
    
    console.log('🤖 Received AI assistant prompt:', prompt);
    
    // Import groq from the main server file
    const { groq } = req.app.locals;
    
    if (!groq) {
      console.error('❌ Groq client not available');
      return res.status(500).json({
        success: false,
        message: 'AI service is currently unavailable'
      });
    }
    const refinement = `
    Please respond only to questions or topics related to professional pet grooming, luxury pet hotels, and virtual veterinary services.
    If the user asks about a service we provide (grooming, hotel, or virtual vet), include a direct link to the relevant page in your answer:
    - For grooming, use: [Pet Grooming](/services)
    - For hotel, use: [Pet Hotel](/hotel)
    - For virtual vet, use: [Virtual Vet](/virtual-vet)
    Format the link as shown above, using markdown.
    For any other topic, politely decline to answer and redirect the conversation to these specific pet services.

    IMPORTANT: 
    - If a user mentions "hotel", "hotel services", or similar, always treat it as referring to our "luxury pet hotel bookings" and answer helpfully about our pet hotel offerings, including the link.
    - Among pet grooming services, we offer a wide range of options: basic grooming, full grooming, and spa packages.
    - If the user asks about their pet being sick, unwell, needing medical help, or mentions health, medicine, or a vet, then offer our virtual veterinary services and mention Mr. John Doe and his expertise, including the link.
    - Otherwise, do not mention virtual veterinary services unless the user brings up a medical or vet-related topic.

    Try to keep the response as concise and friendly as possible.
    `;
    // Use the getGroqChatCompletion function
    const completion = await getGroqChatCompletion(groq, prompt + refinement);
    
    console.log('✅ AI response generated successfully');
    
    res.json({
      success: true,
      response: completion.choices[0].message.content
    });
    
  } catch (error) {
    console.error('❌ AI Assistant Error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request',
      error: error.message
    });
  }
});

async function getGroqChatCompletion(groq,userInput) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: userInput, // Use user input here
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}

// POST /api/appointments
router.post('/appointments', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ success: true, appointment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
