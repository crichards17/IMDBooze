var searchButtonEl = document.querySelector('#search-button');
var searchBoxEl = document.querySelector('#search-box');
var resultsListEl = document.querySelector('#search-results');

const apiURL = 'http://www.omdbapi.com/?apikey=c8c161fc';

function searchMedia() {
    let searchURL = apiURL + `&s=${searchBoxEl.value}`;
    fetch(searchURL)
  .then(response => response.json())
  .then(data => printResults(data));
}

function printResults(data) {
    resultsListEl.innerHTML = "";
    let results = data.Search;
    for (let i = 0; i < results.length; i++) {
        let newLi = document.createElement('li');
        newLi.innerText = results[i].Title;
        resultsListEl.append(newLi);
    }
}

// When selecting a movie from the results list:
function getDetails(title) {
    let searchURL = apiURL + `&t=${title}`;
    fetch(searchURL)
  .then(response => response.json())
  .then(data => passMovie(data));
}

function passMovie(data) {
    let media = new Movie(data.Title);
    media.year = data.Year;
    media.genre = data.Genre;
    media.director = data.Director;
    media.writer = data.Writer;
    media.plot = data.Plot;
    media.country = data.Country;
    media.poster = data.Poster;
    media.metascore = data.Metascore;
    media.imdbid = data.imdbID;
    media.type = data.Type;
    media.website = data.Website;
}

// Displaying data to Movie card:
/*
moviePosterEl.inner

*/

searchButtonEl.addEventListener('click',searchMedia);
searchBoxEl.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        searchMovie();
    }
});