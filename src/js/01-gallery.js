// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const ulEl = document.querySelector('.gallery');

const elements = galleryItems
  .map(item => {
      const strHTML = 
      `<div class="gallery__item">
       <a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        alt="${item.description}" />
       </a>
      </div>`;
    return strHTML;
  })
  .join("");
ulEl.insertAdjacentHTML("afterbegin", elements);

new SimpleLightbox('.gallery a', { captionsData: "alt",  captionDelay: 250, });

console.log(galleryItems);
