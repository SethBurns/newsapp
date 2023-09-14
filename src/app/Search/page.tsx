'use client';
import { useContext, useEffect, useState } from 'react';
import { searchNews } from '../apiCalls/apiCalls';
import { Article } from '../apiCalls/apiCalls';
import Link from 'next/link';
import { ArticlesContext } from '../hooks/useArticles';

export default function Search() {
  const setSearchedArticles = useContext(ArticlesContext)?.setSearchedArticles;
  const searchedArticles = useContext(ArticlesContext)?.searchedArticles;
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  function onClick() {
    setLoading(true);
    searchNews(input).then((data) => {
      setSearchedArticles?.(data.articles);
      setLoading(false);
    });
  }

  return (
    <section className="text-center">
      <form className="flex flex-col justify-center items-center">
        <input
          className="border border-white text-black rounded-md p-2 m-2 h-full hover:border-gray-800 transition ease-in-out duration-500"
          type="text"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="border border-white rounded-md p-2 m-2 h-full hover:border-gray-800 transition ease-in-out duration-500"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onClick()}}
        >
          Submit
        </button>
      </form>
      <h1 className="text-3xl font-bold m-8">Searched Stories</h1>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-4 lg:gap-4 items-center justify-between">
          {searchedArticles?.map((article) => (
            <Link
              href={`/SearchedNews?id=${article.publishedAt}&source=${article.source.id || article.source.name}`}
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
                <p className="line-clamp-4">{article.description}</p>
                <p>{article.publishedAt}</p>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
