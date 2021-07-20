import getTrendingTerms from "services/getTrendingTerms";
import Category from "components/Category";
import { useEffect, useState } from "react";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Trending" options={trends}></Category>;
}
