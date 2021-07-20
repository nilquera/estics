import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage, loadingNextPage } = useGifs({ keyword });

  const handleNextPage = () => {
    setPage((currentPage) => ++currentPage);
  };

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
      <br />
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
}
