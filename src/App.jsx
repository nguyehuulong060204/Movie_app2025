import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";

const App = () => {
  const API_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const [searchTexm, setSearchText] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMovies = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.Response === "false") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMoviesList([]);
        return;
      }

      setMoviesList(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchMovies();
  }, []);



  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="/public/hero-img.png" alt="" />
          <h1>
            Find <span className="text-gradient">Movie</span> you'll Enjoy
            Without The Hassle
          </h1>
        </header>

        <Search searchTexm={searchTexm} setSearchText={setSearchText} />
        <h1 className="text-white">{searchTexm}</h1>
        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>
          {loading ? (
            <div className="spinner">
              <Spinner />
            </div>
          ) : errorMessage ? (
            <p className="text-red">{errorMessage}</p>
          ) : (
            <ul>
              {moviesList.map((movie) => (
                <p className="text-white" key={movie.id}>
                  {movie.title}
                </p>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
