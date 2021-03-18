class Movie {
	constructor(title){
		this.title = title;
	}
	get title(){
		return this.title;
	}
	set year(y){
		this.year = y;
	}

	get year() {
		return this.year;
	}

	set genre(g){
		this.genre = g;
	}

	get genre() {
		return this.genre;
	}

	set director(d){
		this.director = d;
	}

	get director() {
		return this.director;
	}

	set writer(w){
		this.writer = w;
	}

	get writer() {
		return this.writer;
	}

	set plot(p){
		this.plot = p;
	}

	get plot() {
		return this.plot;
	}

	set country(c){
		this.country = c;
	}

	get country() {
		return this.country;
	}

	set poster(p){
		this.poster = p;
	}

	get poster() {
		return this.poster;
	}

	set metascore(m){
		this.metascore = m;
	}

	get metascore() {
		return this.metascore;
	}

	set imdbid(i){
		this.imdbid = i;
	}

	get imdbid() {
		return this.imdbid;
	}

	// Note: 'movie', 'series'
	set type(t){
		this.type = t;
	}

	get type() {
		return this.type;
	}

	set website(w){
		this.website = w;
	}

	get website() {
		return this.website;
	}

	// TODO: add method to return text blob that spits out toString();
	toString() {
		return this.title + this.year + this.genre + this.director + this.writer + this.plot + this.country + this.type;
	}
}