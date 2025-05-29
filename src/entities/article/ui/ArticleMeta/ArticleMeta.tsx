import { Article } from "../../types";
import * as S from "./styles";

interface Props {
  article: Article;
}

const ArticleMeta = ({ article }: Props) => {
  return (
    <S.MetaWrapper>
      <S.Author>
        <S.Avatar src={article.author.image} alt={article.author.username} />
        <div>
          <S.Username>{article.author.username}</S.Username>
          <S.Date>{new Date(article.createdAt).toLocaleDateString()}</S.Date>
        </div>
      </S.Author>

      <S.FavoriteButton disabled title="Лайк доступен только авторизованным">
        <img
          src="/icons/heart.svg"
          alt="favorite"
          width={16}
          height={16}
          style={{ marginRight: "5px" }}
        />
        {article.favoritesCount}
      </S.FavoriteButton>
    </S.MetaWrapper>
  );
};

export default ArticleMeta;
