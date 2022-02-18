export default class NewsApiService{
    constructor () {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        console.log(this);
    const url = `https://pixabay.com/api/?key=25749295-c1c91c3a002bacdc6232fef3b&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

    fetch(url)
    .then(r => r.json())
    .then(data => {
        console.log(data);
        this.incrementPage();
      });
    };

    get query() {
        return this.searchQuery;
    };

    set query(newQuery) {
        this.searchQuery = newQuery;
    };

    incrementPage() {
        this.page +=1;
    };

    resetPage() {
        this.page = 1;
    };

};