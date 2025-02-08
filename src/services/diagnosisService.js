import API from "./api";

const diagnosisService = {
  create: (data) => {
    return API.call().post("/diagnosis/create", data);
  },
  getDetail: (id) => {
    return API.call().get(`/diagnosis/getdetail?id=${id}`);
  },
};

export default diagnosisService;
