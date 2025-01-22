import API from "./api";

const medicinesServices = {
  getAll: () => {
    return API.call().get("");
  },
};

export default medicinesServices;
