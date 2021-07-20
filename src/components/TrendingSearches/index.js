import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";
// import TrendingSearches from "./TrendingSearches";
const TrendingSearches = React.lazy(() =>
  import("components/TrendingSearches/TrendingSearches.js")
);

console.log(TrendingSearches);

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "100px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  );
}
