// API: https://omdbapi.com/?apikey=d25f08a2&s=dog

// const movieListEl = document.querySelector(".movie-list");
// const search = document.querySelector("search")
// const searchValue = `${search}`
const homePageEl = document.querySelector(".home-page");
const movieCardEl = document.querySelector(".movie-cards");
const searchedEl = document.querySelector(".searched__movie");

async function searchValue(event) {
  const movieInput = event.target.value
  const movie = await fetch(
    `http://www.omdbapi.com/?apikey=d25f08a2&s=${movieInput}`
  );
  const jsonData = await movie.json();
  console.log(jsonData)  

  if (!jsonData.Search) {
    movieCardEl.innerHTML = noResults()
    homePageEl.style.display = "none"
    searchedEl.style.display = "block"
  } else if (jsonData.Search) {
    movieCardEl.innerHTML = jsonData.Search.slice(0, 6).map((movie) =>
      movieHTML(movie)
    ).join("")
    homePageEl.style.display = "none"
    searchedEl.style.display = "block"
  }
}

function searched() {
  return `<div class="searched__movie">Showing results for:${movie.Title}</div>`
}

function noResults() {
  return `
  <div class="no-results">Sorry, no results available for that title.</div>
  `
}

function movieHTML(movie) {
  return `<div class="movie-cards">
  <div class="movie-card click">
  <figure class="movie__poster--wrapper">
      <img class="movie__poster" src="${movie.Poster}">
  </figure>
  <div class="movie__info">
      <div class="movie__title">${movie.Title}</div>
      <div class="movie__year">${movie.Year}</div>
  </div>
</div>
</div>`
}
