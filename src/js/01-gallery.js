// Add imports above this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = galleryMarkup.join(' ');
var lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionData: 'alt',
});

function createGalleryItem({ previewImg, sizeImg, description }) {
  return `<a class="gallery__item" href=${sizeImg}>
            <img class="gallery__image" src=${previewImg} alt=${description} />
        </a>`;
}
console.log(galleryItems);
