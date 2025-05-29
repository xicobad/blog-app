import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import {
  useGetArticleBySlugQuery,
  useUpdateArticleMutation,
} from "@entities/article/api";
import ArticleForm from "@entities/article/ui/ArticleForm";
import type { ArticleFormData } from "@entities/article/ui/ArticleForm";
import * as S from "./styles";

const EditArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const {
    data,
    isLoading: isLoadingArticle,
    isError,
  } = useGetArticleBySlugQuery(slug ?? "");
  const [updateArticle, { isLoading: isUpdating }] = useUpdateArticleMutation();

  if (!currentUser) return <Navigate to="/sign-in" replace />;
  if (isError) return <p>Error loading article</p>;
  if (isLoadingArticle || !data?.article) return <p>Loading...</p>;

  const { article } = data;

  if (article.author.username !== currentUser.username) {
    return <Navigate to="/" replace />;
  }

  const initialValues: ArticleFormData = {
    title: article.title,
    description: article.description,
    body: article.body,
    tagList: article.tagList || [],
  };

  const handleSubmit = async (formData: ArticleFormData) => {
    try {
      const res = await updateArticle({
        slug: article.slug,
        article: formData,
      }).unwrap();
      navigate(`/articles/${res.article.slug}`);
    } catch (err) {
      console.error("Ошибка при обновлении статьи", err);
    }
  };

  return (
    <S.PageWrapper>
      <ArticleForm
        onSubmit={handleSubmit}
        initialValues={initialValues}
        isLoading={isUpdating}
      />
    </S.PageWrapper>
  );
};

export default EditArticlePage;
