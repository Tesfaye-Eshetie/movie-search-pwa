import React from 'react'

export default function Form() {
  return (
    <section className="form-container">
      <form id="form-title" className="form" action="/">
        <fieldset>
          <legend>By Title</legend>
          <div className="input-control">
            <div className="input-flex">
              <label htmlFor="title" className="label">Title:</label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Title of the movie..."
              />
            </div>
            <div className="error"></div>
          </div>
          <div className="input-control">
            <div className="input-flex">
              <label htmlFor="year" className="label">Year:</label>
              <input
                id="year"
                name="year"
                type="number"
                min="1928"
                max="2022"
                placeholder="Year..."
              />
            </div>
            <div className="error"></div>
          </div>
          <div className="input-control">
            <div id="input-flex">
              <label htmlFor="plot-title" className="label">Plot:</label>
              <select id="plot-title">
                <option value="Short" selected>Short</option>
                <option value="Full">Full</option>
              </select>
            </div>
          </div>
          <button type="submit">Search</button>
        </fieldset>
      </form>
      <form id="form-ID" className="form" action="">
        <fieldset>
          <legend>BY IMDB-ID</legend>
          <div className="input-control">
            <div className="input-flex">
              <label htmlFor="IMDB_ID" className="label">ID:</label>
              <input
                id="IMDB_ID"
                name="IMDB_ID"
                type="text"
                placeholder="IMDB ID..."
              />
            </div>
          </div>
          <div className="input-control">
            <div id="input-flex">
              <label htmlFor="plot-ID" className="label">Plot:</label>
              <select id="plot-ID">
                <option value="Short" selected>Short</option>
                <option value="Full">Full</option>
              </select>
            </div>
          </div>
          <button type="submit">Search</button>
        </fieldset>
      </form>
    </section>
  )
}
