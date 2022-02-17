import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';

const searchForm = document.querySelector(".search-form");
const galleryEl = document.querySelector(".gallery");

searchForm.addEventListener('submit, onSearch');

function onSearch (e) {
    e.preventDefault();

    const url = 'https://pixabay.com/api/?key=25749295-c1c91c3a002bacdc6232fef3b&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1';

    fetch(url)
    .then(r => r.json())
    .then(console.log);

};





const url = 'https://pixabay.com/api/?key=25749295-c1c91c3a002bacdc6232fef3b&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1';

fetch(url)
.then(r => r.json())
.then(console.log);



    
      









        
     
