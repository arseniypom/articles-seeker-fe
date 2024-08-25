export interface IArticle {
  id: number;
  title: string;
  author: string;
  content: string;
}

export interface IArticlesResponse {
  articles: IArticle[];
  totalPages: number;
  topic: string;
}