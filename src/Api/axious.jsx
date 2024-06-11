import axios from "axios";
const axiosInstance=axios.create({
    
//baseURL:"http://localhost:5009",
baseURL:"https://abinet19.netlify.app/"
})
export  {axiosInstance}