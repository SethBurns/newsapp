'use client';
import { Article } from '../apiCalls/apiCalls';

export function SingleArticle({ source, article }: { article: Article, source: string }) {
  
  return (
    <article className='flex flex-col text-center justify-between items-center'>
      <h1 className='text-3xl m-4'>{article.title}</h1>
      {article.urlToImage && (
        <img className='w-1/2 m-4' src={article.urlToImage} alt={article.title} />
      )}
      <p className='w-2/3 m-2'> {article.content?.replaceAll(/(<([^>]+)>)/gi, "")}</p>
      <p className="m-2">Author: {article.author}</p>
      <p className="m-2">Date Published: {(article.publishedAt).split('T')[0]}</p>
      <a className="m-2 border border-white p-2 rounded hover:invert hover:bg-black transition ease-in-out duration-500" href={`${article.url}`}>
        Read {article.source.name}
      </a>
    </article>
  );
}
