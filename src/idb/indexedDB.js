import { openDB } from 'idb';

export const database = openDB('moviesDB', 1, {
  upgrade(db) {
    db.createObjectStore('searchMovie');
    db.createObjectStore('favoriteMovie');
  },
});

export const setSearchMovie = async (key, data) =>
  (await database).put('searchMovie', data, key);

export const setFavMovie = async (key, data) =>
  (await database).put('favoriteMovie', data, key);

export const deleteFavMovie = async (key) =>
  (await database).delete('favoriteMovie', key);

export const getComments = async (key) =>
  (await database).get('searchMovie', key);

const createMovieDisplay = (div, data) => {
  const movie = document.createElement('display-movie');
  console.log(data);
  movie.setAttribute('poster', data.Poster);
  movie.setAttribute('title', data.Title);
  movie.setAttribute('year', data.Year);
  for (let i = 0; i < data.Ratings.length; i++) {
    const x = 'rating_';
    movie.setAttribute(
      x + i,
      `${data.Ratings[i].Source} : ${data.Ratings[i].Value}`
    );
  }
  movie.setAttribute('date', data.Released);
  div.append(movie);
};

const createFavButton = (div, data) => {
  const bntFav = document.createElement('button');
  bntFav.textContent = 'add to fav';
  bntFav.classList.add('fav-button');
  bntFav.classList.add('green-button');
  bntFav.addEventListener('click', ({ target }) => {
    if (target.textContent === 'add to fav') {
      setFavMovie(data.imdbID, data);
      bntFav.textContent = 'Remove from fav';
      bntFav.classList.add('red-button');
    } else {
      bntFav.textContent = 'add to fav';
      bntFav.classList.remove('red-button');
    }
  });

  div.append(bntFav);
};

const createNoteInput = (div) => {
  const noteDiv = document.createElement('div');
  noteDiv.classList.add('display-note');

  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Note about the movie...';
  textarea.classList.add('display-none');

  const comments = document.createElement('p');
  comments.classList.add('display-none');

  const bntNote = document.createElement('button');
  const bntEdit = document.createElement('button');
  bntEdit.textContent = 'Edit Comment';
  bntEdit.classList.add('yellow-button');
  bntEdit.classList.add('display-none');

  getComments('comments').then((data) => {
    if (data) {
      comments.innerHTML = `<span> Comments: </span> ${data}`;
      textarea.value = data;
      bntNote.textContent = 'View Comment';
    } else {
      bntNote.textContent = 'Add Comment';
      textarea.classList.remove('display-none');
    }
  });

  bntNote.addEventListener('click', (e) => {
    const element = e.target;
    const InputElem = element.previousElementSibling.previousElementSibling;
    const InputValue = InputElem.value;
    if (element.textContent === 'Add Comment') {
      if (InputValue) {
        setSearchMovie('comments', InputValue);
        InputElem.classList.add('display-none');
        element.textContent = 'View Comment';
        window.location.reload();
      } else {
        InputElem.placeholder = 'Input is missing?';
        InputElem.classList.add('red-input');
      }
    } else if (element.textContent === 'View Comment') {
      comments.classList.remove('display-none');
      element.textContent = 'Hide Comment';
      bntEdit.classList.remove('display-none');
      bntEdit.addEventListener('click', () => {
        InputElem.classList.remove('display-none');
        comments.classList.add('display-none');
        element.textContent = 'Add Comment';
        bntEdit.classList.add('display-none');
      });
    } else {
      bntEdit.classList.add('display-none');
      comments.classList.add('display-none');
      element.textContent = 'View Comment';
    }
  });
  noteDiv.append(textarea, comments, bntNote, bntEdit);
  div.append(noteDiv);
};

export const getSearchMovie = async (con) => {
  (await database).get('searchMovie', 'search').then(({ search }) => {
    if (search) {
      const { data } = search;
      const displayDiv = document.createElement('div');
      displayDiv.classList.add('display-div');

      createMovieDisplay(displayDiv, data);
      createNoteInput(displayDiv);
      createFavButton(displayDiv, data);

      con.append(displayDiv);
    }
  });
};

export const getFavMovie = async () => {
  (await database).getAll('favoriteMovie').then((res) =>res);
};
