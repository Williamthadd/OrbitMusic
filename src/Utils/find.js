import Services from "../Data/ServicesData";
import Songs from "../Data/SongData";

export function findServiceByTitle(title) {
  return Services.find((service) => service.title === title);
}

export function findSong(text) {
  const search = text.toLowerCase();
  const matchedSongs = [];

  Songs.forEach((song) => {
    if (
      song.name.toLowerCase().includes(search) ||
      song.artist.toLowerCase().includes(search) ||
      (song.genres &&
        song.genres.some((genre) => genre.toLowerCase().includes(search)))
    ) {
      matchedSongs.push(song);
    }
  });

  return matchedSongs;
}
