import { apiSlice } from "../../app/api/apiSlice";

interface Credentials {
  type: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  country: string;
  email: string;
  phone: string;
}

interface NewBookingInfo {
  amount: number;
  currency: string;
  email: string;
  firstName: string;
  lastName: string;
  callbackUrl: string;
}

interface NewBooking {
  trainId: number;
  setNo: number;
  passengerId: string;
  classType: string;
}

interface UpdatedBooking {
  trainId?: number;
  setNo?: number;
  passengerId?: string;
  classType?: string;
}

export const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerGust: builder.mutation<void, Credentials>({
      query: (credentials) => ({
        url: "/user/auth/create",
        method: "POST",
        body: {
          ...credentials,
        },
      }),
    }),
    initiatPayment: builder.mutation<void, { newBookingInfo: NewBookingInfo }>({
      query: ({ newBookingInfo }) => ({
        url: "/payment/initiate",
        method: "POST",
        body: newBookingInfo,
      }),
    }),
    getBookings: builder.query<any, void>({
      query: () => "/bookings",
    }),
    getBookingById: builder.query<any, number>({
      query: (id) => `/bookings/${id}`,
    }),
    createBooking: builder.mutation<void, { newBooking: NewBooking }>({
      query: ({ newBooking }) => ({
        url: "/reservation/create",
        method: "POST",
        body: newBooking,
      }),
    }),
    updateBooking: builder.mutation<
      void,
      { id: number; updatedBooking: UpdatedBooking }
    >({
      query: ({ id, ...updatedBooking }) => ({
        url: `/bookings/${id}`,
        method: "PUT",
        body: updatedBooking,
      }),
    }),
    deleteBooking: builder.mutation<void, number>({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
    }),
    getSeatNumbers: builder.query<any, number>({
      query: (trainId) => `/reservation/sets-availability/${trainId}`,
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
  useGetSeatNumbersQuery,
  useInitiatPaymentMutation,
} = bookApiSlice;
