import API from "./api";

const medicineServices = {
  getAll: () => {
    return API.call().get("/medicines/getAll");
  },
  getDetail: (id) => {
    return API.call().get(`/medicines/detail?id=${id}`);
  },
};

export default medicineServices;
