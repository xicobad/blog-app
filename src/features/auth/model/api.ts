import { baseApi } from "@shared/api/baseApi";
import { User } from "./types";
import { RegisterPayload, LoginPayload, UserResponse } from "./types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<UserResponse, RegisterPayload>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: { user },
      }),
    }),

    loginUser: builder.mutation<UserResponse, LoginPayload>({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: { user },
      }),
    }),

    updateUser: builder.mutation<
      UserResponse,
      { user: Partial<User> & { password?: string } }
    >({
      query: ({ user }) => ({
        url: "/user",
        method: "PUT",
        body: { user },
      }),
    }),
  }),

  overrideExisting: false,
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useUpdateUserMutation,
} = authApi;
