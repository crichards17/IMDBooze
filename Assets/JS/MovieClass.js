class Movie {
	constructor(title){
		this._title = title;
	}

	get title(){
		return this._title;
	}
	set year(y){
		this._year = y;
	}

	get year() {
		return this._year;
	}

	set genre(g){
		this._genre = g;
	}

	get genre() {
		return this._genre;
	}

	set director(d){
		this._director = d;
	}

	get director() {
		return this._director;
	}

	set writer(w){
		this._writer = w;
	}

	get writer() {
		return this._writer;
	}

	set plot(p){
		this._plot = p;
	}

	get plot() {
		return this._plot;
	}

	set country(c){
		this._country = c;
	}

	get country() {
		return this._country;
	}

	set poster(p){
		this._poster = p;
	}

	get poster() {
		return this._poster;
	}

	set metascore(m){
		this._metascore = m;
	}

	get metascore() {
		return this._metascore;
	}

	set imdbid(i){
		this._imdbid = i;
	}

	get imdbid() {
		return this._imdbid;
	}

	// Note: 'movie', 'series'
	set type(t){
		this._type = t;
	}

	get type() {
		return this._type;
	}

	set website(w){
		this._website = w;
	}

	get website() {
		return this._website;
	}

	toString() {
		return this._title + this._year + this._genre + this._director + this._writer + this._plot + this._country + this._type;
	}
}