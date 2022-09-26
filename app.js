// API: https://omdbapi.com/?apikey=d25f08a2&s=dog

// const movieListEl = document.querySelector(".movie-list");
// const search = document.querySelector("search")
// const searchValue = `${search}`

const homePageEl = document.querySelector(".home-page");
const movieCardEl = document.querySelector(".movie-card");

async function searchValue(event) {
  const movieInput = event.target.value
  const movie = await fetch(
    `http://www.omdbapi.com/?apikey=d25f08a2&s=${movieInput}`
  );
  const jsonData = await movie.json();
  console.log(jsonData)  

  if (!jsonData.Search) {
    movieCardEl.innerHTML = noResults()
  } else if (jsonData.Search) {
    movieCardEl.innerHTML = jsonData.Search.map((movie) =>
      movieHTML(movie)
    ).join("")
  }
}

function noResults() {
  return `
  <div class="no-results">Sorry, no results available for that title</div>
  `
}

function movieHTML(movie) {
  return `<div class="movie-card">
  <figure class="movie__poster--wrapper">
      <img class="movie__poster" src="${movie.Poster}">
  </figure>
  <div class="movie__info">
      <div class="movie__title">${movie.Title}</div>
      <div class="movie__year">${movie.Year}</div>
  </div>
</div>`;
}

// function alert() {
//   alert("Only used for visual effect");
// }
