import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApiSlice = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    registerGust: builder.mutation({
      query: (credentials) => ({
        url: "/user/auth/register-gust",
        method: "POST",
        body: {
          ...credentials,
        },
      }),
    }),
    getBookings: builder.query({
      query: () => "/bookings",
    }),
    getBookingById: builder.query({
      query: (id) => `/bookings/${id}`,
    }),
    createBooking: builder.mutation({
      query: (newBooking) => ({
        url: "/bookings",
        method: "POST",
        body: newBooking,
      }),
    }),
    updateBooking: builder.mutation({
      query: ({ id, ...updatedBooking }) => ({
        url: `/bookings/${id}`,
        method: "PUT",
        body: updatedBooking,
      }),
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useGetBookingByIdQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
  useRegisterGustMutation,
} = bookingApiSlice;
