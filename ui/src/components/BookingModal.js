import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const validationSchema = Yup.object({
  petName: Yup.string()
    .required('Pet name is required')
    .min(2, 'Pet name must be at least 2 characters'),
  petType: Yup.string()
    .required('Pet type is required'),
  date: Yup.date()
    .required('Date is required')
    .min(new Date(), 'Date cannot be in the past'),
  time: Yup.string()
    .required('Time is required'),
  ownerName: Yup.string()
    .required('Owner name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[89]\d{7}$/, 'Phone number must be 8 digits and start with 8 or 9')
    .required('Phone number is required'),
  notes: Yup.string()
    .max(500, 'Notes cannot exceed 500 characters')
});

function BookingModal({ service, onClose }) {
  const initialValues = {
    petName: '',
    petType: '',
    date: '',
    time: '',
    ownerName: '',
    email: '',
    phone: '',
    notes: ''
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log('Submitting booking:', values); // Debug log

      const bookingData = {
        ...values,
        serviceName: service.name,
        serviceId: service.id,
        price: service.price,
        status: 'pending'
      };

      const response = await fetch('http://localhost:5001/api/bookings', { // Make sure port is 5001
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();
      console.log('Server response:', data); // Debug log

      if (response.ok) {
        toast.success('Booking submitted successfully!');
        onClose();
      } else {
        console.error('Server error:', data);
        toast.error(data.message || 'Failed to submit booking');
      }
    } catch (error) {
      console.error('Error details:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Book {service.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Pet Name</label>
                <Field
                  name="petName"
                  className="w-full p-2 border rounded-lg"
                />
                <ErrorMessage
                  name="petName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Pet Type</label>
                <Field
                  as="select"
                  name="petType"
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Select pet type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="petType"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Owner Name</label>
                <Field
                  name="ownerName"
                  className="w-full p-2 border rounded-lg"
                />
                <ErrorMessage
                  name="ownerName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full p-2 border rounded-lg"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <Field
                  name="phone"
                  type="tel"
                  placeholder="81234567"
                  maxLength="8"
                  className="w-full p-2 border rounded-lg"
                />
                <div className="text-gray-500 text-xs mt-1">Enter 8 digits starting with 8 or 9</div>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Date</label>
                <Field
                  name="date"
                  type="date"
                  className="w-full p-2 border rounded-lg"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Time</label>
                <Field
                  name="time"
                  type="time"
                  className="w-full p-2 border rounded-lg"
                />
                <ErrorMessage
                  name="time"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Notes</label>
                <Field
                  as="textarea"
                  name="notes"
                  className="w-full p-2 border rounded-lg"
                  rows="3"
                />
                <ErrorMessage
                  name="notes"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 rounded-lg transition duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-teal-600 hover:bg-teal-700 text-white'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default BookingModal; 