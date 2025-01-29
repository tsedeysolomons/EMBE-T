import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: { seatNo: "", user: {} },
  reducers: {
    setSeatNo: (state, action) => {
      const { seatNo } = action.payload;
      state.seatNo = seatNo;
    },
    setUser: (state, action) => {
      const { user } = action.payload;
      console.table(user);
      state.user = user;
    },
    resetSeatNo: (state) => {
      state.seatNo = "";
    },
  },
});

export const { setSeatNo, resetSeatNo, setUser } = bookSlice.actions;

export default bookSlice.reducer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectSeatNo = (state: any) => state.seatNo;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectUser = (state: any) => state.user;
