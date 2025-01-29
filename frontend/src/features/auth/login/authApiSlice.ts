import { apiSlice } from "../../../app/api/apiSlice";
import { logOut, setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/auth/login",
        method: "POST",
        body: { ...credentials, role: "user" },
      }),
    }),
    signUp: builder.mutation({
      query: (credentials) => {
        console.dir(credentials);

        return {
          url: "/user/auth/create",
          method: "POST",
          body: { ...credentials },
        };
      },
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(logOut());
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
          }, 1000);
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getUser: builder.mutation({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          const { accessToken } = data;
          dispatch(setCredentials({ accessToken }));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useSendLogoutMutation,
  useRefreshMutation,
  useSignUpMutation,
} = authApiSlice;
