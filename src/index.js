import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import NewsApiService from './js/news-sarvice'


const searchForm = document.querySelector(".search-form");
const galleryEl = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");

const newsApiService = new NewsApiService();

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch (e) {
    e.preventDefault();

    newsApiService.query = e.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
    newsApiService.fetchArticles();
}

function onLoadMore () {
    newsApiService.fetchArticles();
}






    
      









        
     
