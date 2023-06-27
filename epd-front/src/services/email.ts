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
    uploadEmail: builder.mutation({
      query(file) {
        const formData = new FormData();
        formData.append('file', file);


        return {
          url: `emails/`,
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': `multipart/form-data`,
            "Accept": "*/*",
          },
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEmailsQuery, useUploadEmailMutation } = emailApi