import paymentService from "../services/paymentService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  payments: [],
};

const name = `payment`;

export const fetchGetAllPayment = createAsyncThunk(
  `${name}/fetchGetAllPayment`,
  async () => {
    const res = await paymentService.getAll();
    return res.data.payment;
  }
);

const paymentSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllPayment.fulfilled, (state, action) => {
      state.payments = action.payload;
    });
  },
});

export default paymentSlice.reducer;
