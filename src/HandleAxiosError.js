import {toast} from 'react-toastify';

export default function HandleAxiosError(error) {
   if (error.response) {
   // The request was made and the server responded with a status code
   // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      toast.error('Error fetching data. Please try again later.');
   } else if (error.request) {
   // The request was made but no response was received
   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
   // http.ClientRequest in node.js
      console.log(error.request);
      toast.error('Error fetching data. Please try again later.');
   } 
   console.log(error.config);
   console.log(error.code);
   console.log(error.message);
   console.log(error.status);
   if (error.message==="Cannot read properties of undefined (reading 'description')") {
       toast.error('Can not find this city. Please, check the spelling');
   }
   console.log(error.toJSON());
   if (error.code === "ERR_NETWORK") {
      toast.error('Can not load the weather data. Please, check your internet connection');
   }
}