const axios = require('axios');
require('dotenv').config();

const JIRA_DOMAIN = process.env.JIRA_DOMAIN.replace('https://', '').replace('/', '');
const EMAIL = process.env.JIRA_EMAIL;
const API_TOKEN = process.env.JIRA_API_TOKEN;

// Base64 encode credentials
const auth = Buffer.from(`${EMAIL}:${API_TOKEN}`).toString('base64');

const jiraApi = axios.create({
  baseURL: `https://${JIRA_DOMAIN}/rest/api/2`,
  headers: {
    'Authorization': `Basic ${auth}`,
    'Content-Type': 'application/json'
  }
});

// Updated task numbers
const tasks = [
  {
    summary: '[PET-42] Implement Service Selection Page',
    description: `Tasks:
    - Create service cards layout
    - Add service details and pricing
    - Implement service filtering
    - Add responsive design
    - Create Book Now button`
  },
  {
    summary: '[PET-43] Create Booking Form Component',
    description: `Tasks:
    - Design booking form UI
    - Add pet information fields
    - Implement date/time picker
    - Add form validation
    - Create success/error messages`
  }
];

async function createTask(summary, description) {
  try {
    // Create the task
    const response = await jiraApi.post('/issue', {
      fields: {
        project: { key: 'PET' },
        summary: summary,
        description: description,
        issuetype: { name: 'Task' }
      }
    });

    // Link to PET-14
    await jiraApi.post('/issueLink', {
      type: {
        name: "Relates"
      },
      inwardIssue: {
        key: response.data.key
      },
      outwardIssue: {
        key: "PET-14"
      }
    });

    console.log(`✅ Created and linked task: ${response.data.key}`);
    return response.data;
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
    if (error.response) {
      console.log('Error details:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

async function createAllTasks() {
  console.log('🚀 Starting task creation...');
  for (const task of tasks) {
    await createTask(task.summary, task.description);
  }
}

// Run the script
createAllTasks()
  .then(() => console.log('✨ All tasks created!'))
  .catch(console.error); 