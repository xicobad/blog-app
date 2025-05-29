import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useGetArticleBySlugQuery,
  useDeleteArticleMutation,
} from "@entities/article/api";
import ReactMarkdown from "react-markdown";
import ArticleMeta from "@entities/article/ui/ArticleMeta";
import TagList from "@entities/article/ui/TagList";
import * as S from "./styles";
import { RootState } from "@app/store";
import ConfirmModal from "@shared/ui/ConfirmModal";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const { data, isLoading, isError } = useGetArticleBySlugQuery(slug ?? "");
  const [deleteArticle] = useDeleteArticleMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!slug) return <p>Некорректный адрес статьи.</p>;
  if (isLoading) return <p>Загрузка статьи...</p>;
  if (isError || !data?.article) return <p>Ошибка при загрузке статьи.</p>;

  const { article } = data;
  const isAuthor = currentUser?.username === article.author.username;

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteArticle(article.slug).unwrap();
      navigate("/");
    } catch (err) {
      console.error("Failed to delete article:", err);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.LeftSide>
          <S.Title>{article.title}</S.Title>
          <TagList tags={article.tagList} />
        </S.LeftSide>

        <S.RightSide>
          <ArticleMeta article={article} />
          {isAuthor && (
            <S.Actions>
              <S.EditButton to={`/articles/${article.slug}/edit`}>
                Edit
              </S.EditButton>

              <S.DeleteWrapper>
                <S.DeleteButton onClick={handleDelete}>Delete</S.DeleteButton>
                <ConfirmModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  onConfirm={confirmDelete}
                  message="Are you sure to delete this article?"
                />
              </S.DeleteWrapper>
            </S.Actions>
          )}
        </S.RightSide>
      </S.Header>

      <S.Description>{article.description}</S.Description>

      <S.Body>
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </S.Body>
    </S.Wrapper>
  );
};

export default ArticlePage;
