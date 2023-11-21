import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";
import SearchSongCardContainer from "../Elements/SearchSongCardContainer";
import Songs from "../Data/SongData";
import SongCard from "../Components/SongCard";

const Home = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchingSomething, setIsSearchingSomething] = useState(false);

  function handleSearch(text) {
    console.log(text);
    setSearchValue(text);
    setIsSearchingSomething(false);

    console.log(isSearchingSomething);
  }

  return (
    <div className="container">
      <Header
        currentPage={props.currentPage}
        handleChangePage={props.handleChangePage}
      />
      <div className="flex jc-c page-title fd-c">
        <h1>Home</h1>
        <div className="body-content flex fd-c ai-s">
          <SearchBar
            handleSearch={handleSearch}
            search={setIsSearchingSomething}
            searchValue={searchValue}
          />
          {isSearchingSomething && searchValue !== "" && (
            <div className="ai-s">
              <h4>
                Search result for: <b>{searchValue}</b>
              </h4>
              <SearchSongCardContainer searchValue={searchValue} />
            </div>
          )}

          <div className="flex fd-c ai-s">
            <h4>Recommendation</h4>
            <div className="flex card-container" style={{ width: "63vw" }}>
              {Songs.filter((song) => song.tags.includes("Promoted")).map(
                (song) => (
                  <SongCard
                    key={song.id}
                    name={song.name}
                    image={song.image}
                    artist={song.artist}
                    genres={song.genres}
                    duration={song.duration}
                    link={song.link}
                  />
                )
              )}
            </div>
          </div>

          <div className="flex fd-c ai-s">
            <h4>Trending</h4>
            <div className="flex card-container" style={{ width: "63vw" }}>
              {Songs.filter((song) => song.tags.includes("Trending")).map(
                (song) => (
                  <SongCard
                    key={song.id}
                    name={song.name}
                    image={song.image}
                    artist={song.artist}
                    genres={song.genres}
                    duration={song.duration}
                    link={song.link}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
