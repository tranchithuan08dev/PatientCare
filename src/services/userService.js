import API from "./api";

const userServices = {
  create: (data) => {
    return API.call().post(`/user/create`, data);
  },
  getAll: () => {
    return API.call().get(`/user/getAll`);
  },
  getDetail: (id) => {
    return API.call().get(`/user/getdetail?id=${id}`);
  },
  update: (data) => {
    return API.call().post(`/user/update?id=${data.id}`, data);
  },
};

export default userServices;
