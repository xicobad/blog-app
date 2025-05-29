export interface Author {
  username: string;
  image: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  favorited: string;
  favoritesCount: number;
  author: Author;
}

export interface ArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

export interface ArticleResponse {
  article: Article;
}
