import axios from "axios";
const url = "http://localhost:8000";
export const SignUp = async (user) => {
    return await axios.post(`${url}/user/signup`, user);
  };