// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Email } from '../types/email'
import { backendHost } from '../constants/constants'

// Define a service using a base URL and expected endpoints
export const emailApi = createApi({
  reducerPath: 'emailApi',
  baseQuery: fetchBaseQuery({ baseUrl: backendHost }),
  endpoints: (builder) => ({
    getEmails: builder.query<Array<Email>, string>({
      query: () => `emails`,
    }),
    getEmailById: builder.query<Email, string>({
      query: (id) => `emails/${id}`,
    }),
    addEmail: builder.mutation<Email, Partial<Email>>({
      query(body) {
        return {
          url: `emails`,
          method: 'POST',
          body,
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEmailsQuery } = emailApi