"use client"
import { useContext } from 'react';
import Link from 'next/link';
import { ArticlesContext } from '../hooks/useArticles';

export function TopArticles() {
  const articles = useContext(ArticlesContext)?.articles;
  const today = new Date();
  const date = `${
    today.getMonth() + 1
  }-${today.getDate()}-${today.getFullYear()}`;
  
 
  return (
    <section className='text-center'>
      <h1 className="text-3xl font-bold m-8">Top Stories: {date}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-4 lg:gap-4 items-center justify-between">
        {articles?.map((article) => (
          <Link
            href={`/TopNews?id=${article.publishedAt}`}
            key={article.publishedAt}
            className="text-center border border-white rounded-md p-2 m-2 h-full hover:border-gray-800 transition ease-in-out duration-500"
          >
            <article className="w-full flex flex-col justify-around">
              <h1 className="text-2xl font-bold text-center line-clamp-4">
                {article.title}
              </h1>
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} />
              )}
              <p className="line-clamp-4">
                {article.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
