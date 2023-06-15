// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Email } from '../types/email'

// Define a service using a base URL and expected endpoints
export const emailApi = createApi({
  reducerPath: 'emailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1/api/' }),
  endpoints: (builder) => ({
    getEmails: builder.query<Array<Email>, string>({
      query: () => `emails/`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEmailsQuery } = emailApi