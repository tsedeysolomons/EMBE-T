import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: { seatNo: "", user: {}, reservationInfo: {} , paymentDetels: {}},
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
    resetSeatNo: (state) => {
      state.seatNo = "";
    },
  },
});

export const { setSeatNo, resetSeatNo, setUser, setReservationInfo } =
  bookSlice.actions;

export default bookSlice.reducer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectSeatNo = (state: any) => state.book.seatNo;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectUser = (state: any) => state.book.user;

export const selecReservation = (state: any) => state.book.reservationInfo;
