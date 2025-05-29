import { baseApi } from "@shared/api/baseApi";
import { ArticlesResponse, ArticleResponse } from "../article/types";
import { ArticleFormData } from "@entities/article/ui/ArticleForm";

export const articleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<
      ArticlesResponse,
      { limit: number; offset: number }
    >({
      query: ({ limit, offset }) => `articles?limit=${limit}&offset=${offset}`,
    }),

    getArticleBySlug: builder.query<ArticleResponse, string>({
      query: (slug) => `articles/${slug}`,
    }),

    createArticle: builder.mutation<
      ArticleResponse,
      { article: ArticleFormData }
    >({
      query: ({ article }) => ({
        url: "articles",
        method: "POST",
        body: { article },
      }),
    }),

    updateArticle: builder.mutation<
      ArticleResponse,
      { slug: string; article: ArticleFormData }
    >({
      query: ({ slug, article }) => ({
        url: `articles/${slug}`,
        method: "PUT",
        body: { article },
      }),
    }),

    deleteArticle: builder.mutation<void, string>({
      query: (slug) => ({
        url: `articles/${slug}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetArticlesQuery,
  useGetArticleBySlugQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articleApi;
