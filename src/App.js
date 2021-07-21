import "App.css";
import Home from "pages/Home";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";
import StaticContext from "context/StaticContext";
import { Link, Route } from "wouter";
import { GifsContextProvider } from "context/GifsContext";

function App() {
  return (
    <StaticContext.Provider value={{ name: "nilquera" }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt="Estics logo" src="/logo.png" />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/sticker/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
