import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
      const formData = await request.json();
      console.log('Received form data:', formData);
      
      // Google Apps Script URL - Replace with your new script URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbz60IO8yM5-5rj8P71q_0adpDJzWq6T_ArL9wJCQkmc5MMKxWu08rfEqhFFhWBOl9jL/exec';
      
      // Send as JSON
      const jsonData = JSON.stringify(formData);
      console.log('Sending JSON to Google:', jsonData);
      
      // Add try-catch specifically for the fetch operation
      try {
        console.log('About to send request to Google Apps Script...');
        
        // Use Promise with timeout to prevent hanging
        const fetchPromise = fetch(scriptURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonData,
          mode: 'no-cors', // This makes the response opaque but allows cross-origin requests
        });
        
        // Set a timeout to prevent hanging
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Request timed out')), 5000);
        });
        
        // Race the fetch against a timeout
        await Promise.race([fetchPromise, timeoutPromise])
          .then(() => {
            console.log('Request sent to Google Apps Script');
          })
          .catch((error) => {
            console.log('Fetch failed but continuing:', error.message);
          });
        
      } catch (fetchError) {
        console.error('Error during fetch operation:', fetchError);
        // Continue execution instead of stopping - the data might have been sent
      }
      
      // Return success response with redirection URL
      console.log('Sending success response to client');
      return NextResponse.json({ 
        success: true,
        redirectUrl: '/thankyou'
      });
      
    } catch (error: unknown) {
      // Error handling remains the same
      if (error instanceof Error) {
        console.error('Error in API route:', error.message);
      } else {
        console.error('Unknown error in API route:', error);
      }
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      return NextResponse.json(
        { success: false, message: `Failed to submit form: ${errorMessage}` },
        { status: 500 }
      );
    }
  }