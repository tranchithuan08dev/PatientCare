import { configureStore } from "@reduxjs/toolkit";
import medicine from "./medicineSlice";
import userSlice from "./userSlice";
import diagnosisSlice from "./diagnosisSlice";
const store = configureStore({
  reducer: {
    MEDICINE: medicine,
    USER: userSlice,
    DIAGNOSIS: diagnosisSlice,
  },
});

export default store;
