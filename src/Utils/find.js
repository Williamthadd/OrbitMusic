import Services from "../Data/ServicesData";
import Songs from "../Data/SongData";

export function findServiceByTitle(title) {
  return Services.find((service) => service.title === title);
}

export function findServiceByID(id) {
  return Services.find((service) => service.id === id);
}

export function findPackagePrice(service, pack) {
  const foundService = findServiceByID(service);
  const foundPackage = foundService.package.find(
    (packageItem) => packageItem.packname === pack
  );
  return foundPackage.price;
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
