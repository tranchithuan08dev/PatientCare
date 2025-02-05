import API from "./api";

const userServices = {
  create: (data) => {
    return API.call().post(`/user/create`, data);
  },
  getAll: () => {
    return API.call().get(`/user/getAll`);
  },
};

export default userServices;
