import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const trainsAdapter = createEntityAdapter({
  // Customize sorting logic if needed
  // sortComparer: (a, b) => String(a)?.name?.localeCompare(b?.name),
});

const initialState = trainsAdapter.getInitialState();

export const searchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrains: builder.query({
      query: ({
        departure,
        arrival,
        travelTimeAndDate,
        classType,
      }: {
        departure?: string;
        arrival?: string;
        travelTimeAndDate?: string;
        classType?: string;
      }) => ({
        url: `/api/train?startStation=${departure ?? ""}&endStation=${
          arrival ?? ""
        }&departureDate=${travelTimeAndDate ?? ""}&type=${classType ?? ""}`,
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const loadedTrains = responseData.map((train) => {
          //train.id = train._id; // Assuming the API returns a field `_id` for each train
          return train;
        });

        console.log(responseData);

        return trainsAdapter.setAll(initialState, loadedTrains);
      },
      /*
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Train", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Train", id })),
          ];
        } else return [{ type: "Train", id: "LIST" }];
      },
      */
    }),
    /*addNewTrain: builder.mutation({
      query: (initialTrain) => ({
        url: "/trains",
        method: "POST",
        body: {
          ...initialTrain,
        },
      }),
      invalidatesTags: [{ type: "Train", id: "LIST" }],
    }),
    updateTrain: builder.mutation({
      query: (initialTrain) => ({
        url: "/trains",
        method: "PATCH",
        body: {
          ...initialTrain,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Train", id: arg.id }],
    }),
    deleteTrain: builder.mutation({
      query: ({ id }) => ({
        url: `/trains`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Train", id: arg.id }],
    }),*/
  }),
});

export const {
  useGetTrainsQuery,
  /*
  useAddNewTrainMutation,
  useUpdateTrainMutation,
  useDeleteTrainMutation,
  */
} = searchApiSlice;

// returns the query result object
export const selectTrainsResult = searchApiSlice.endpoints.getTrains.select();

// creates memoized selector
const selectTrainsData = createSelector(
  selectTrainsResult,
  (trainsResult) => trainsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllTrains,
  selectById: selectTrainById,
  selectIds: selectTrainIds,
} = trainsAdapter.getSelectors(
  (state) => selectTrainsData(state) ?? initialState
);
