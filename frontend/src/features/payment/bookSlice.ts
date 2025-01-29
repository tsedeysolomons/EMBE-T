import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "search",
  initialState: { seatNo: "" },
  reducers: {
    setSeatNo: (state, action) => {
      const { seatNo } = action.payload;
      state.seatNo = seatNo;
    },
    resetSeatNo: (state) => {
      state.seatNo = "";
    },
  },
});

export const { setSeatNo, resetSeatNo } = bookSlice.actions;

export default bookSlice.reducer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectSeatNo = (state: any) => state.seatNo;
