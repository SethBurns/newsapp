//create a context for storing articles

// Path: src/app/hooks/useArticles.tsx
import { Article } from '../apiCalls/apiCalls'
import { createContext } from 'react'

export const ArticlesContext = createContext<{articles: Article[], setSearchedArticles: Function, searchedArticles: Article[]} | null>(null)