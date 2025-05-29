import { useState } from "react";
import { Pagination } from "antd";
import { useGetArticlesQuery } from "@entities/article/api";
import ArticleCard from "@entities/article/ui/ArticleCard";
import * as S from "./styles";

const ARTICLES_PER_PAGE = 5;

const HomePage = () => {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * ARTICLES_PER_PAGE;

  const { data, isLoading, isError } = useGetArticlesQuery({
    limit: ARTICLES_PER_PAGE,
    offset,
  });

  if (isLoading) return <div>Загрузка статей...</div>;
  if (isError) return <div>Ошибка при загрузке статей.</div>;

  return (
    <S.PageWrapper>
      {data?.articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}

      <S.PaginationWrapper>
        <Pagination
          current={page}
          pageSize={ARTICLES_PER_PAGE}
          total={data?.articlesCount ?? 0}
          onChange={setPage}
          showSizeChanger={false}
        />
      </S.PaginationWrapper>
    </S.PageWrapper>
  );
};

export default HomePage;
