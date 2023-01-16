import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const galleryEl = document.querySelector('.gallery');
const itemsMarkup = onClickGallary(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', itemsMarkup)
galleryEl.addEventListener('click',onChangeItems)

function onClickGallary(items) {
  return items.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  }).join('')
}


function onChangeItems(event) {
  event.preventDefault();
}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });