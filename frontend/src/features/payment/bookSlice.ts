import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    seatNo: "",
    user: {},
    reservationInfo: {},
    paymentDetels: {},
    paymentDetails: {},
  },
  reducers: {
    setSeatNo: (state, action) => {
      const { seatNo } = action.payload;
      state.seatNo = seatNo;
    },
    setUser: (state, action) => {
      const { user } = action.payload;

      state.user = user;
    },
    setReservationInfo: (state, action) => {
      const { reservation } = action.payload;
      state.reservationInfo = reservation;
    },
    setPaymentDetails: (state, action) => {
      const { payment } = action.payload;
      state.paymentDetails = payment;
    },
    resetSeatNo: (state) => {
      state.seatNo = "";
    },
  },
});

export const {
  setSeatNo,
  resetSeatNo,
  setUser,
  setReservationInfo,
  setPaymentDetails,
} = bookSlice.actions;

export default bookSlice.reducer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectSeatNo = (state: any) => state.book.seatNo;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectUser = (state: any) => state.book.user;

export const selecReservation = (state: any) => state.book.reservationInfo;

export const selectPaymentDetails = (state: any) => state.book.paymentDetails;
