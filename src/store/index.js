import { configureStore } from "@reduxjs/toolkit";
import medicine from "./medicineSlice";
import userSlice from "./userSlice";
import diagnosisSlice from "./diagnosisSlice";
import paymentSlice from "./paymentSlice";
const store = configureStore({
  reducer: {
    MEDICINE: medicine,
    USER: userSlice,
    DIAGNOSIS: diagnosisSlice,
    PAYMENT: paymentSlice,
  },
});

export default store;
