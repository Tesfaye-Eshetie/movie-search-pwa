import { openDB } from "idb";

export const database = openDB("moviesDB", 1, {
  upgrade(db) {
    db.createObjectStore("searchMovie");
    db.createObjectStore("favoriteMovie");
  },
});

export const setSearchMovie = async (key, data) =>
  (await database).put("searchMovie", data, key);

export const setFavMovie = async (key, data) =>
  (await database).put("favoriteMovie", data, key);

export const deleteFavMovie = async (key) =>
  (await database).delete("favoriteMovie", key);
