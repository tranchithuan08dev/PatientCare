import API from "./api";

const medicineServices = {
  getAll: () => {
    return API.call().get("/medicines/getAll");
  },
  getDetail: (id) => {
    return API.call().get(`/medicines/detail?id=${id}`);
  },
  update: (data) => {
    return API.call().patch(`/medicines/update?id=${data.id}`, data);
  },
  create: (data) => {
    return API.call().post(`/medicines/create`, data);
  },
};

export default medicineServices;
