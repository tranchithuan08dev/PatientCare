import { configureStore } from "@reduxjs/toolkit";
import medicine from "./medicineSlice";
import userSlice from "./userSlice";
const store = configureStore({
  reducer: {
    MEDICINE: medicine,
    USER: userSlice,
  },
});

export default store;
