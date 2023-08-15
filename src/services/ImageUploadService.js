import axios from 'axios'


export async function uploadImage(image) {
  try {
        const response = await axios.post('http://localhost:8080/api/uploadImage',  image);
        const convertedData=response.data.roll_numbers.map(element=>element[0]);
        const finalresponse=await axios.post('http://localhost:8080/api/getStudentsById',convertedData);
        return finalresponse.data;
        // Do something with the response from the Spring Boot API, e.g., display the result.
      } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
      }
}


