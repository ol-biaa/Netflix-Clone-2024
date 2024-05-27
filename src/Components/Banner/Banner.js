import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";

// Functional component for the Banner
const Banner = () => {
  // State hook to manage movie data
  const [movie, setMovie] = useState({});

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    // Asynchronous function to fetch Netflix original movies
    (async () => {
      try {
        // GET request to fetch Netflix original movies
        const request = await axios.get(requests.fetchNetflixOriginals);
        // Randomly select a movie from the fetched data and update state
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        // Handle errors
        console.log("error", error);
      }
    })();
  }, []); // Empty dependency array ensures useEffect runs only once after mount

  // Function to truncate a string
  function truncate(str, n) {
    // If string length is greater than n, truncate it and append '...'
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // JSX structure for the Banner component
  return (
    <div
      className="banner"
      style={{
        // Set background image style for the banner
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        {/* Display movie title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          {/* Buttons for Play and My List */}
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* Display truncated movie overview */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      {/* Fade effect at the bottom of the banner */}
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;
