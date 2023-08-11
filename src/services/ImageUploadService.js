import React from 'react'
import axios from 'axios'


export async function uploadImage(image) {
  try {
        const response = await axios.post('http://localhost:8080/api/uploadImage',  image);
        console.log('Response from server:', response.data);
        return response.data;
        // Do something with the response from the Spring Boot API, e.g., display the result.
      } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
      }
}


