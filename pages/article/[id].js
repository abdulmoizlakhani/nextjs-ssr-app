import Link from "next/link";
import Head from "next/head";
import React from "react";
import articleStyles from "../../styles/Article.module.css";
// import { useRouter } from "next/router";

export default function Article({ article }) {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className={articleStyles.grid}>
        <h1>{article.title} &rarr;</h1>
        <p>{article.body}</p>

        <Link href="/">&larr; Go Back</Link>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const article = await res.json();
  return { props: { article } };
};

// export const getServerSideProps = async (ctx) => {
//   const { params } = ctx;
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );
//   const article = await res.json();
//   return { props: { article } };
// };
