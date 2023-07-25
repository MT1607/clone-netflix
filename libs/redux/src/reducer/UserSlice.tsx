import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { basename } from 'path';
import { CreateUserRequest, CreateUserResponse } from '../user-type';

const base_url = import.meta.env.VITE_BACKEND_API_URL;

export const userAPI = createApi({
  reducerPath: 'userAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
  }),

  endpoints: (builder) => ({
    createUser: builder.mutation<CreateUserResponse, CreateUserRequest>({
      query(data) {
        return {
          url: '/user/register',
          method: 'POST',
          body: { ...data },
        };
      },
    }),
  }),
});

export const { useCreateUserMutation } = userAPI;
