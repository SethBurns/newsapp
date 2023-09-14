'use client';
import { Article } from '../apiCalls/apiCalls';

export function SingleArticle({ source, article }: { article: Article, source: string }) {
  
  return (
    <article>
      <h1>{article.title}</h1>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} />
      )}
      <p> {article.content?.replaceAll(/(<([^>]+)>)/gi, "")}</p>
      <p>Author: {article.author}</p>
      <p>Date Published: {article.publishedAt}</p>
      <p>Source: {article.source.name}</p>
      <a className="border border-white p-2 rounded" href={`${article.url}`}>
        Read the Source
      </a>
    </article>
  );
}
