// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
let instance = null;

galleryEl.addEventListener('click', onImgClick);
const galleryMarkup = galleryItems.map(item =>
  createGalleryItem({
    previewImg: item.preview,
    sizeImg: item.original,
    description: item.description,
  })
);

galleryEl.innerHTML = galleryMarkup.join(' ');

function createGalleryItem({ previewImg, sizeImg, description }) {
  return `<div class="gallery__item">
            <a class="gallery__link" href=${sizeImg}>
                <img
                class="gallery__image"
                src=${previewImg}
                data-source=${sizeImg}
                alt=${description}
                />
            </a>
        </div>`;
}

function onImgClick(event) {
  const clickTarget = event.target;

  event.preventDefault();
  if (clickTarget.nodeName != 'IMG') {
    return;
  }
    

const instance = basicLightbox.create(`<img
                src=${clickTarget.dataset.source}
                alt=${clickTarget.alt}
                />`);
  instance.show();
  document.body.addEventListener('keydown', onKeyDown);
}

function onModalClose() {
  document.body.removeEventListener('keydown', onKeyDown);
}

function onKeyDown(event) {
  if (event.code != 'Escape') {
    return;
  }

  instance.close(onModalClose);
}