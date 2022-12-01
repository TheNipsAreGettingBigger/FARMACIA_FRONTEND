import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const laboratoryApi = createApi({
  reducerPath : "laboratory",
  baseQuery : fetchBaseQuery({
    baseUrl : "http://localhost:8000/api",
    prepareHeaders :(headers) => {
      const token = localStorage.getItem("token")
      headers.set('Content-Type', `application/json`)
      if (token) headers.set('Authorization', `Bearer ${token}`)
      return headers
    }
  }),
  keepUnusedDataFor: 1,
  refetchOnMountOrArgChange: 1,
  endpoints: (builder) => ({
    getLaboratories : builder.query({
      query: () => "/laboratories"
    }),
  })
})

export const { useGetLaboratoriesQuery } = laboratoryApi