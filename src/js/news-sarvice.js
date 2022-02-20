import { Notify } from 'notiflix/build/notiflix-notify-aio';
const axios = require('axios').default;

const API_KEY = '25749295-c1c91c3a002bacdc6232fef3b';
const BASE_URL = 'https://pixabay.com/api';

export default class NewsApiService{
    constructor () {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
       console.log(this);
       const url = `${BASE_URL}/?key=25749295-c1c91c3a002bacdc6232fef3b&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;


       return axios.get(url)
          .then(response => {  
                return response.data;
          })
          .then(({ hits, totalHits}) => {
            if (this.page === 1) {
               Notify.success(`Hoorey! We found ${totalHits} images.`);
            };
            this.incrementPage(); 
            return ({hits, totalHits});  
                  })
          .catch(error => {
            Notify.failure('Sorry, there are no images matching your search query. Please try again.')
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












// export default class NewsApiService{
//     constructor () {
//         this.searchQuery = '';
//         this.page = 1;
//     }

//     fetchArticles() {
//        console.log(this);
//        const url = `${BASE_URL}/?key=25749295-c1c91c3a002bacdc6232fef3b&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;


//        return axios.get(url)
//           .then(response => {  
//                 return response.data;
//           })
//           .then(({ hits, totalHits}) => {

//                     // if (this.page === 1) {
//                     //     Notify.success(`Hoorey! We found ${totalHits} images.`);
//                     // };
//                     this.incrementPage(); 
//                     return ({hits, totalHits});  
//                   })
//           .catch(error => {
//             Notify.failure('Sorry, there are no images matching your search query. Please try again.')
//           });
//     };
    
//     get query() {
//         return this.searchQuery;
//     };

//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     };

//     incrementPage() {
//         this.page +=1;
//     };

//     resetPage() {
//         this.page = 1;
//     };

// };
