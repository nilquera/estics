import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { useRef, useEffect, useCallback } from "react";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage, loadingNextPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  console.log(isNearScreen);

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((currentPage) => ++currentPage), 300),
    []
  );

  // const debounceHandleNextPage = debounce(() => {
  //   setPage((currentPage) => ++currentPage);
  //   console.log("next page");
  // }, 500);

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
      {loadingNextPage && <Spinner />}
      <div id="visor" ref={externalRef} />
    </>
  );
}
