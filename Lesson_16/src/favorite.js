import { createMarkup } from './helpers/cards';
import { common } from './helpers/common';
import { findProduct } from './helpers/findProduct';
import { createModal } from './helpers/createModal';

const arrFavorite =
  JSON.parse(localStorage.getItem(common.favoriteItems)) ?? [];

const list = document.querySelector('.js-list');
createMarkup(list, arrFavorite);
list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-information')) {
    const currentProduct = findProduct(evt.target);
    createModal(currentProduct);
  } else if (evt.target.classList.contains('js-favorite')) {
    const currentProduct = findProduct(evt.target);
    const inFavorite = arrFavorite.some(({ id }) => id === currentProduct.id);
    if (inFavorite) {
      return;
    }

    arrFavorite.push(currentProduct);
    localStorage.setItem(common.favoriteItems, JSON.stringify(arrFavorite));
  }
}
