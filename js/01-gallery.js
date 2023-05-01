import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  listEl: document.querySelector(".gallery"),
};

const imagesEl = galleryItems
  .map(function ({ preview, original, description }) {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

refs.listEl.innerHTML = imagesEl;

refs.listEl.addEventListener("click", fullscreenImg);

function fullscreenImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const srcVariable = evt.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${srcVariable}" width="800" height="600">
`);

  instance.show();

  refs.listEl.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
    refs.listEl.removeEventListener("keydown", (e) => {});
  });
}
