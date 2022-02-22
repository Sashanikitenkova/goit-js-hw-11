import { Notify } from 'notiflix/build/notiflix-notify-aio';
import articlesTpl from './templates/articles.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';
import NewsApiService from './js/news-sarvice';
import LoadMoreBtn from './js/load-more-btn';



const searchForm = document.querySelector(".search-form");
const galleryEl = document.querySelector(".gallery");

const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({ selector: ".load-more", hidden: true, });

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArtic);

function onSearch (e) {
        e.preventDefault();
    
        newsApiService.query = e.currentTarget.elements.searchQuery.value.trim();
    
        if (newsApiService.query === '') {
            Notify.failure('Write a request');
            return
        }
            loadMoreBtn.shaw();
            newsApiService.resetPage();
            clearArticlesContainer();
            fetchArtic();
    
    }
    
    async function fetchArtic() {
        loadMoreBtn.disable();
        const responseData = await newsApiService.fetchArticles();
        const fetchHits = responseData.hits;
        const fetchTotalHits = responseData.totalHits;

            if (fetchHits.length === fetchTotalHits) {
                Notify.failure("We're sorry, but you've reached the end of search results.");
                loadMoreBtn.hide();
            };

            apendArticlesMarkup(fetchHits);
            loadMoreBtn.enable();
    }
    
    function apendArticlesMarkup(fetchHits) {
        galleryEl.insertAdjacentHTML('beforeend', articlesTpl(fetchHits));
        const gallery = new SimpleLightbox('.gallery a', {overlayOpacity: 0.8});
        gallery.refresh();
    }
    
    function clearArticlesContainer() {
        galleryEl.innerHTML ='';
    }














    // try {
        
    // } catch (error) {
        
    // }

// if (fetchHits[1]) {
            //     Notify.success(`Hoorey! We found ${fetchTotalHits} images.`);
            // };


    // function onSearch (e) {
    //     e.preventDefault();
    
    //     newsApiService.query = e.currentTarget.elements.searchQuery.value;
    
    //     if (newsApiService.query === '') {
    //         Notify.failure('Write a request');
    //     };
    //         loadMoreBtn.shaw();
    //         newsApiService.resetPage();
    //         clearArticlesContainer();
    //         fetchArticles();
    
    // }
    
    // function fetchArticles () {
    //     loadMoreBtn.disable();
    //     newsApiService.fetchArticles().then(({hits, totalHits}) => {
    //         console.log(hits);

    //         if (hits.length === totalHits) {
    //             Notify.failure("We're sorry, but you've reached the end of search results.");
    //             loadMoreBtn.hide();
    //         };

    //         apendArticlesMarkup(hits);
    //         loadMoreBtn.enable();
    //     });
    // }
    
    // function apendArticlesMarkup(hits) {
    //     galleryEl.insertAdjacentHTML('beforeend', articlesTpl(hits));
    // }
    
    // function clearArticlesContainer() {
    //     galleryEl.innerHTML ='';
    // }









    





        
     
