import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCreateArticleMutation } from "@entities/article/api";
import { RootState } from "@app/store";
import ArticleForm, { ArticleFormData } from "@entities/article/ui/ArticleForm";
import * as S from "./styles";

const CreateArticlePage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const [createArticle, { isLoading }] = useCreateArticleMutation();

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  const handleSubmit = async (formData: ArticleFormData) => {
    try {
      const res = await createArticle({ article: formData }).unwrap();
      navigate(`/articles/${res.article.slug}`);
    } catch (error) {
      console.error("Ошибка создания статьи:", error);
    }
  };

  return (
    <S.PageWrapper>
      <ArticleForm onSubmit={handleSubmit} isLoading={isLoading} />
    </S.PageWrapper>
  );
};

export default CreateArticlePage;