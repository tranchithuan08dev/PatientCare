import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import medicineServices from "../services/medicineService";

const initialState = {
  createMedicine: {},
  medicines: [],
  medicineDetail: {},
  updateMedicine: {},
};

const name = `medicine`;

export const fetchCreateMedicine = createAsyncThunk(
  `${name}/fetchCreateMedicine`,
  async (data) => {
    const res = await medicineServices.create(data);
    console.log("create data", res);

    return res;
  }
);

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
    return res.data.data;
  }
);

export const fetchUpdateMedicine = createAsyncThunk(
  `${name}/fetchUpdateMedicine`,
  async (data) => {
    const res = await medicineServices.update(data);
    return res;
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
    builder.addCase(fetchUpdateMedicine.fulfilled, (state, action) => {
      state.updateMedicine = action.payload;
    });
    builder.addCase(fetchCreateMedicine.fulfilled, (state, action) => {
      state.createMedicine = action.payload;
    });
  },
});

export default medicineSlice.reducer;
