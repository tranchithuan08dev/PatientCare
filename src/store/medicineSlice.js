import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import medicineServices from "../services/medicineService";

const initialState = {
  medicines: [],
  medicineDetail: {},
};

const name = `medicine`;

export const fetchMedicines = createAsyncThunk(
  `${name}/fetchMedicines`,
  async () => {
    const res = await medicineServices.getAll();
    return res.data.medicines;
  }
);

export const fetchMedicineDetail = createAsyncThunk(
  `${name}/fetchMedicineDetail`,
  async (id) => {
    const res = await medicineServices.getDetail(id);
    console.log("res", res);
    return res.data.data;
  }
);

const medicineSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMedicines.fulfilled, (state, action) => {
      state.medicines = action.payload;
    });
    builder.addCase(fetchMedicineDetail.fulfilled, (state, action) => {
      state.medicineDetail = action.payload;
    });
  },
});

export default medicineSlice.reducer;
