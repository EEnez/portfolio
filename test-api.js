// Test script for the contact API
// Run this after starting your dev server: npm run dev

const testContactAPI = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Message',
    message: 'This is a test message to verify the API is working correctly.'
  };

  try {
    console.log('Testing contact API...');
    console.log('Test data:', testData);
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('Response status:', response.status);
    const result = await response.json();
    console.log('Response body:', result);

    if (response.ok) {
      console.log('✅ API test successful!');
    } else {
      console.log('❌ API test failed:', result.error);
    }
  } catch (error) {
    console.error('❌ API test error:', error.message);
  }
};

// Run the test
testContactAPI();
