import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { classType: "HardSeat", train: {} },
  reducers: {
    setClassType: (state, action) => {
      const { classType } = action.payload;
      state.classType = classType;
    },
    setTrain: (state, action) => {
      const { train } = action.payload;
      state.train = train;
    },
    resetClassType: (state) => {
      state.classType = "";
    },
  },
});

export const { setClassType, resetClassType, setTrain } = searchSlice.actions;

export default searchSlice.reducer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectClassType = (state: any) => state.search.classType;

export const selectTrain = (state: any) => state.search.train;
