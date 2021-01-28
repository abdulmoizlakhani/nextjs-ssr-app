import React from "react";
import ArticleItem from "./ArticleItem";
import articleStyles from "../../styles/Article.module.css";

export default function ArticleList({ articles }) {
  return (
    <ul className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
}
