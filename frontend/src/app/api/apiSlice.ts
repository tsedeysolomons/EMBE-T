import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { setCredentials } from "../../features/auth/login/authSlice";

// Base query configuration
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api", // Ensure this is the correct base URL
  credentials: "include", // Allow cookies for authentication
  prepareHeaders: (headers, { getState }) => {
    // Extract token from state
    const token = (getState() as { auth: { token: string } }).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// Enhanced base query with reauthentication logic
const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  try {
   // console.log("Request Arguments:", args); // Debug: log request args
    //console.log("Extra Options:", extraOptions); // Debug: log extra options

    // Make the initial API request
    let result = await baseQuery(args, api, extraOptions);

    // Check for 403 (Forbidden) error to trigger reauthentication
    if (result?.error?.status === 403) {
      console.log("Access denied. Attempting token refresh...");

      // Request a new token using the refresh token endpoint
      const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

      if (refreshResult?.data) {
        console.log("Token refreshed successfully.");

        // Update the Redux store with the new token
        api.dispatch(setCredentials({ ...refreshResult.data }));

        // Retry the original request with the new token
        result = await baseQuery(args, api, extraOptions);
      } else {
        console.error("Token refresh failed:", refreshResult?.error);

        // Handle specific cases if refresh token also fails
        if (refreshResult?.error?.status === 403) {
          console.error("Refresh token is invalid or expired.");
        }

        return refreshResult; // Return the refresh error to the caller
      }
    }

    return result; // Return the final result
  } catch (error) {
    console.error("Error in baseQueryWithReauth:", error);
    return {
      error: { status: "FETCH_ERROR", data: "An unexpected error occurred." },
    };
  }
};

// API slice configuration
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Note", "User"], // Adjust tags based on your API requirements
  endpoints: () => ({}), // Define API endpoints later
});
