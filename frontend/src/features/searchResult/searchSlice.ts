import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { classType: "HardSeat" },
  reducers: {
    setClassType: (state, action) => {
      const { classType } = action.payload;
      state.classType = classType;
    },
    resetClassType: (state) => {
      state.classType = "";
    },
  },
});

export const { setClassType, resetClassType } = searchSlice.actions;

export default searchSlice.reducer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectClassType = (state: any) => state.search.classType;
