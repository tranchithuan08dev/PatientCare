import API from "./api";

const paymentService = {
  getAll: () => {
    return API.call().get(`/payment/getAll`);
  },
};

export default paymentService;
