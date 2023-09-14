'use client';
import { useContext } from 'react';
import { SingleArticle } from '../Components/SingleArticle';
import { ArticlesContext } from '../hooks/useArticles';
import { useSearchParams } from 'next/navigation';

export default function TopNews() {
  const articles = useContext(ArticlesContext)?.articles;
  const publishedAt = useSearchParams().get('id');

  const article = articles?.find(
    (article) => article.publishedAt === publishedAt
  );
  if (!article) {
    return null;
  }
  return <SingleArticle article={article} />;
}
