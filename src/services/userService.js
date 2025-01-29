import API from "./api";

const userServices = {
  create: (data) => {
    return API.call().post(`/user/create`, data);
  },
};

export default userServices;
