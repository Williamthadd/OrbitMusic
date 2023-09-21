import SongCard from "../Components/SongCard";
import { findSong } from "../Utils/find";

export default function SearchSongCardContainer(props) {
  const songs = findSong(props.searchValue);

  if (songs.length === 0) {
    return "";
  }

  return (
    <div className="card-container flex" style={{ width: "908px" }}>
      {songs.map((song) => (
        <SongCard
          key={song.id}
          name={song.name}
          image={song.image}
          artist={song.artist}
          genres={song.genres}
          duration={song.duration}
        />
      ))}
    </div>
  );
}
