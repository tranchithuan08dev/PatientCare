import axios from "axios";

const API = {
  call: () => {
    return axios.create({
      baseURL: `http://localhost:5000`,
    });
  },
};

export default API;
