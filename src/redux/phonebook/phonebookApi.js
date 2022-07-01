import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  endpoints: builder => ({
    //   запит за всіма контактами
    fetchContacts: builder.query({
      query: () => ({ url: '/contacts', method: 'GET' }),
      providesTags: ['contacts'],
    }),
    //   запит за одним контактом
    fetchOneContactById: builder.query({
      query: id => ({ url: `/contacts/${id}`, method: 'GET' }),
    }),
    //    запит на додавання контакту
    addContact: builder.mutation({
      query: data => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          name: data.name,
          number: data.number,
          email: data.email,
        },
      }),
      tagTypes: ['contacts'],
      invalidatesTags: ['contacts'],
    }),
    //    запит на видалення контакту
    deleteContact: builder.mutation({
      query: data => ({
        url: `/contacts/${data}`,
        method: 'DELETE',
        body: { id: data },
      }),
      tagTypes: ['contacts'],
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useFetchOneContactByIdQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookApi;
