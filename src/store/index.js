import { configureStore } from "@reduxjs/toolkit";
import medicine from "./medicineSlice";

const store = configureStore({
  reducer: {
    MEDICINE: medicine,
  },
});

export default store;
