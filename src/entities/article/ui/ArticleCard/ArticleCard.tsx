import { Article } from "../../types";
import * as S from "./styles";
import TagList from "../TagList";

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  const {
    slug,
    title,
    description,
    favoritesCount,
    author,
    createdAt,
    tagList,
  } = article;

  return (
    <S.CardWrapper>
      <S.HeaderRow>
        <S.Left>
          <S.Title to={`/articles/${slug}`}>{title}</S.Title>
          <S.FavCount>
            <img
              src="/icons/heart.svg"
              alt="favorite"
              width={16}
              height={16}
              style={{ marginRight: "5px" }}
            />
            {favoritesCount}
          </S.FavCount>
        </S.Left>

        <S.AuthorBlock>
          <S.AuthorImage src={author.image} alt={author.username} />
          <div>
            <S.AuthorName>{author.username}</S.AuthorName>
            <S.CreatedAt>
              {new Date(createdAt).toLocaleDateString()}
            </S.CreatedAt>
          </div>
        </S.AuthorBlock>
      </S.HeaderRow>

      <TagList tags={tagList} />
      <S.Description>{description}</S.Description>
    </S.CardWrapper>
  );
};

export default ArticleCard;
