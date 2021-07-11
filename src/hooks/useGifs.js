import { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(
    function () {
      setLoading(true);

      const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "void";

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem("lastKeyword", keywordToUse);
      });
    },
    [keyword]
  );

  return { loading, gifs };
}
