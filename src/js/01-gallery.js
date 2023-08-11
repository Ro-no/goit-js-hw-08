import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const allItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class ='gallery__item '>
            <a class="gallery__link" href = '${original}' >
                <img class = 'gallery__image' src='${preview}' alt='${description} '  />
            </a > 
         </li>`
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', allItems);

const glightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['<', '>'],
});
