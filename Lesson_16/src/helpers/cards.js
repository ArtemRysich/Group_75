// {
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/4878/catalog_origin_269592.jpg',
//     name: 'Шуруповерт',
//     price: 1500,
//     description:
//       'Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями.',
//   },


function createMarkup(container, arr) {
  const markup = arr.map(({id, img, name }) => 
`<li data-product-id="${id}" class="js-card">
    <img src="${img}" alt="${name}">
    <h2>${name}</h2>
    <a href="#" class="js-information">More information</a>
    <div>
    <button class="js-favorite">Add to favorite</button>
    <button class="js-basket">Add to basket</button>
    </div>
</li>`).join('');
container.innerHTML = markup;
}
export {createMarkup}