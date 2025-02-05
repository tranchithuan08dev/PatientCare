import API from "./api";

const diagnosisService = {
  create: (data) => {
    return API.call().post("/diagnosis/create", data);
  },
};

export default diagnosisService;
