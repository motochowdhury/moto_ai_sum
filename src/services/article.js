import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey)
            headers.set('X-RapidAPI-Host', 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize')

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummery: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})


export const {useLazyGetSummaryQuery} = articleApi;



