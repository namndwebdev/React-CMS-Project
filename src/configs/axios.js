import axios from 'axios'
import { URI } from './config'


axios.defaults.baseURL = URI;
axios.defaults.headers.common['Authorization'] =  ''


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const axiosPublic = axios.create({
  baseURL: URI
});

export {
  axios,
  axiosPublic
}