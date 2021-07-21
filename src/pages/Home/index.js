import { useState } from "react";
import { useLocation } from "wouter";
import Category from "components/Category";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import TrendingSearches from "components/TrendingSearches";
import useGifs from "hooks/useGifs";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Search</button>
        <input
          placeholder="Search a sticker here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </div>
        <div className="App-category">
          <TrendingSearches />
          <Category
            name="Barcelona"
            options={[
              "Gaudí",
              "Sagrada Família",
              "Fonts de Montjuïc",
              "Búnquers",
            ]}
          />
        </div>
      </div>
    </>
  );
}
