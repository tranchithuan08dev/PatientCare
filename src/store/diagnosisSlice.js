import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import diagnosisService from "../services/diagnosisService";

const initialState = {
  createDiagnosis: {},
};

const name = `diagnosis`;

export const fetchCreateDiagnosis = createAsyncThunk(
  `${name}/fetchCreateDiagnosis`,
  async (data) => {
    const res = await diagnosisService.create(data);
    console.log("ress", res);
    return res.data;
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
  },
});

export default diagnosisSlice.reducer;
