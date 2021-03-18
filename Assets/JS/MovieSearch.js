const searchButtonEl = $('#search-button');
const searchBoxEl = $('#search-box');
const resultsListEl = $('#search-results');
const step2El = $('#step-2-block');
const movieTitleEl = $('#movie-title');
const posterEl = $('#poster-container');
const moviePlotEl = $('#movie-plot');
const movieRatingEl = $('#imdb-rating');
const movieContainerEl = $('.container.movie');

const apiURL = 'https://www.omdbapi.com/?apikey=c8c161fc';

function searchMedia() {
    let searchURL = apiURL + `&s=${searchBoxEl.val()}`;
    fetch(searchURL)
  .then(response => response.json())
  .then(data => printResults(data));
}

function printResults(data) {
    resultsListEl.html('');
    step2El.removeClass('hidden');
    let results = data.Search;
    for (let i = 0; i < results.length; i++) {
        let newResult = $(`<div class="result-card">${results[i].Title}</div>`);
        resultsListEl.append(newResult);
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
    printMovie(data);
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

function printMovie(data) {
    movieTitleEl.text(data.Title);
    if (data.Poster !== 'N/A') {
        posterEl.html(`<img src=${data.Poster} style="height:100%"></img>`);
    } else {
        posterEl.html('Poster Unavailable');
    }
    moviePlotEl.text(`Plot: ${data.Plot}`);
    movieRatingEl.text(`IMDB Rating: ${data.Ratings[0].Value}`);
    movieContainerEl.removeClass('hidden');

    // Dev. Remove for Prod.
    printDrink();
    // 
}

// DEV only. Remove for Prod.
function printDrink () {
    $('#drink-name').text('Whiskey Sour');
    $('#drink-image').html('<img src="https://www.willcookforsmiles.com/wp-content/uploads/2020/02/Whiskey-Sour-9.jpg"></img>');
    $('#ingredients').text("Ingredients: whiskey, sour, ice");
    $('.container.drink').removeClass('hidden');
}

searchButtonEl.on('click',searchMedia);
searchBoxEl.on('keyup', function(event) {
    if (event.keyCode === 13) {
        searchMedia();
    }
});
$(document).on('click', '.result-card', function(event) {
    let title = $(event.target).text();
    getDetails(title);
});