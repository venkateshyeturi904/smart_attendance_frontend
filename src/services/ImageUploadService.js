import axios from 'axios'

export async function uploadImage(image) {
  try {
        const response = await axios.post('http://localhost:8080/api/uploadImages',  image )
        const getAllStudents = await axios.get('http://localhost:8080/api/getStudentTabel')
        return [getAllStudents.data,response.data]
      } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
      }
}

export async function uploadAttended(attended) {
  try {
        const response = await axios.post('http://localhost:8080/api/makeAttendanceByRollno',attended )
        return true;
      } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
      }
}


