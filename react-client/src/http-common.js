import axios from "axios";

export default axios.create({
  baseURL: "http://3.144.250.98:8080/api",
  headers: {
    "Cache-Control":"no-cache",
    "Accept-language": "en",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin":"http://3.144.250.98:8080/api"
  }
});