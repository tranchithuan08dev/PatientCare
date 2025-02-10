import API from "./api";

const paymentService = {
  getAll: () => {
    return API.call().get(`/api/payment/getAll`);
  },
};

export default paymentService;
