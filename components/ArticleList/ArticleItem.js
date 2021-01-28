import React from "react";
import Link from "next/link";
import articleStyles from "../../styles/Article.module.css";

export default function ArticleItem({ article }) {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <li className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </li>
    </Link>
  );
}
