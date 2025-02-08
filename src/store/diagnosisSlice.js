import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import diagnosisService from "../services/diagnosisService";

const initialState = {
  createDiagnosis: {},
  getDetailDiagnosis: {},
  getDetailMedicine: [],
};

const name = `diagnosis`;

export const fetchCreateDiagnosis = createAsyncThunk(
  `${name}/fetchCreateDiagnosis`,
  async (data) => {
    const res = await diagnosisService.create(data);
    return res.data;
  }
);

export const fetchDiagnosisDetail = createAsyncThunk(
  `${name}/fetchDiagnosisDetail`,
  async (id) => {
    const res = await diagnosisService.getDetail(id);
    console.log("res", res);
    return res.data.diagnosis;
  }
);

export const fetchMedicineDetail = createAsyncThunk(
  `${name}/fetchMedicineDetail`,
  async (id) => {
    const res = await diagnosisService.getDetailMedicine(id);
    console.log("res", res);
    return res.data.medicine;
  }
);

const diagnosisSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateDiagnosis.fulfilled, (state, action) => {
      state.createUser = action.payload;
    });
    builder.addCase(fetchDiagnosisDetail.fulfilled, (state, action) => {
      state.getDetailDiagnosis = action.payload;
    });
    builder.addCase(fetchMedicineDetail.fulfilled, (state, action) => {
      state.getDetailMedicine = action.payload;
    });
  },
});

export default diagnosisSlice.reducer;
