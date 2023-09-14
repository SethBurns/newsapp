import { subtractSecond, addSecond } from '../util/helperFunctions';

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface ReturnData {
  status: string;
  totalResults: number;
  articles: Article[];
}

// anything after q must be 500 characters or less
//
//https://d3b4357e-5e24-418e-a017-4d0f0220a96d.mock.pstmn.io/fetchBitcoin
export async function searchNews(keyword: string) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&apiKey=d08187d6de4149389c0d5afb4aa2f40e`
  );
  const data = await response.json();
  return data;
}

//
//https://d3b4357e-5e24-418e-a017-4d0f0220a96d.mock.pstmn.io/fetchTopNews
export async function fetchTopNews() {
  const response = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=d08187d6de4149389c0d5afb4aa2f40e'
  );
  const data: ReturnData = await response.json();
  return data;
}

//
//https://d3b4357e-5e24-418e-a017-4d0f0220a96d.mock.pstmn.io/fetchNewsByDate
export async function fetchNewsByDate(date: string, source: string) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?sources=${source}&from=${subtractSecond(
      date
    )}&to=${addSecond(date)}&apiKey=d08187d6de4149389c0d5afb4aa2f40e`
  );
  const data: ReturnData = await response.json();
  return data;
}
