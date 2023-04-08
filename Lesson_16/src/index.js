// https://t.me/figma2html
// https://t.me/figmaforweb
// https://t.me/HtmlGram1



// const local = document.querySelector('.js-local');
// const session = document.querySelector('.js-session');

// local.addEventListener('click', onLocal);
// // session.addEventListener('click', onSession);

// const user = {
//   name: 'user',
//   sayHello() {
//     console.log(this.name);
//   },
// };

// function onLocal(evt) {
//   localStorage.setItem('local', JSON.stringify(user));

//   try {
//     console.log(JSON.parse(localStorage.getItem('local')));
//   } catch (e) {
//     console.log(e);
//   }
// }

// function onSession(evt) {
//   sessionStorage.setItem('session', 'on session');
// }
// const value = 1;
// try {
//   console.log('start');
//   console.log(2 + 2);
//   console.log(value);
//   console.log(4 + 4);
// } catch (e) {
//   console.log(e);
// }

// -------------------------------------------------------------------------//

import { instruments } from './instruments';
import { createMarkup } from './helpers/cards';
import { createModal } from './helpers/createModal';
import { findProduct } from './helpers/findProduct';
import { common } from './helpers/common';
const container = document.querySelector('.js-container');

const arrFavorite =
  JSON.parse(localStorage.getItem(common.favoriteItems)) || [];
const arrCheckout = [];

createMarkup(container, instruments);

container.addEventListener('click', onCLick);

function onCLick(evt) {
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
