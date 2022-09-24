import React, { useState } from "react";
import { setSearchMovie } from "../idb/indexedDB";
import axios from "axios";

export default function SearchByTitle() {
  const [searchInput, setSearchInput] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchInput((values) => ({ ...values, [name]: value }));
  };

  const baseURL = "https://www.omdbapi.com/";
  const APIKey = import.meta.env.VITE_APIKey;

  const getMovie = async (url) => {
    try {
      const { data } = await axios(url);
      setSearchMovie("search", data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      searchInput.title &&
      searchInput.title !== "" &&
      searchInput.year !== ""
    ) {
      getMovie(
        `${baseURL}?t=${searchInput.title}&y=${searchInput.year}&plot=${searchInput.plot}&apikey=${APIKey}`
      );
    } else if (searchInput.title && searchInput.title !== "") {
      getMovie(
        `${baseURL}?t=${searchInput.title}&plot=${searchInput.plot}&apikey=${APIKey}`
      );
    } else {
      setError("Title is required...");
    }
    setSearchInput({});
  };

  return (
    <>
      <form className="form" action="/" onSubmit={handleSubmit}>
        <fieldset>
          <legend>By Title</legend>
          <div className="input-control">
            <div className="input-flex">
              <label className="label">
                Title:
                <input
                  type="text"
                  name="title"
                  value={searchInput.title || ""}
                  onChange={handleChange}
                  placeholder="Title of the movie..."
                />
              </label>
            </div>
            <div className="error">{error}</div>
          </div>
          <div className="input-control">
            <div className="input-flex">
              <label className="label">
                Year:
                <input
                  type="number"
                  name="year"
                  value={searchInput.year || ""}
                  onChange={handleChange}
                  min="1928"
                  max="2022"
                  placeholder="Year..."
                />
              </label>
            </div>
          </div>
          <div className="input-control">
            <div id="input-flex">
              <label className="label">
                Plot:
                <select
                  name="plot"
                  value={searchInput.plot || "Short"}
                  onChange={handleChange}
                >
                  <option value="Short">Short</option>
                  <option value="Full">Full</option>
                </select>
              </label>
            </div>
          </div>
          <button type="submit">Search</button>
        </fieldset>
      </form>
    </>
  );
}
