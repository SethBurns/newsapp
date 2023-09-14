'use client';
import { SingleArticle } from '../Components/SingleArticle';
import { useSearchParams } from 'next/navigation';
import { Article, fetchNewsByDate } from '../apiCalls/apiCalls';
import { useContext, useEffect, useState } from 'react';
import { ArticlesContext } from '../hooks/useArticles';

export default function SearchedNews() {
  const publishedAt = useSearchParams().get('id');
  const source = useSearchParams().get('source')!;
  const articles = useContext(ArticlesContext)?.searchedArticles;
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (articles) {
      const article = articles.find(
        (article) => article.publishedAt === publishedAt
      );
      if (article) {
        setArticle(article);
      } else {
        setLoading(true);
        fetchNewsByDate(publishedAt!, source).then((data) => {
          console.log('data', data);
          if (data.articles) {
            setArticle(data.articles[0]);
            setLoading(false);
          } else {
            return <p>Error, we could not find your article.</p>;
          }
        });
      }
    }
  }, []);

  if (!article) {
    return null;
  }
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {!loading && <SingleArticle source={source} article={article} />}
    </div>
  );
}
