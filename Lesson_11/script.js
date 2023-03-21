// const title = document.querySelector('h1')// тег
// const title = document.querySelector('#title')// id - #
// const title = document.querySelector(".js-title"); // css - .
// const input = document.querySelector('.js-input')
// title.textContent = "I love JS";
// title.classList.add('title');
// title.classList.remove('title');
// title.classList.toggle('title');
// title.classList.toggle('title');
// title.classList.toggle('title');
// console.dir(title);
// input.value = 'Chat GPT 😂😂😂'
// console.dir(input);

// title.style.color = "red";
// title.style.fontSize = "50px";

// const list = document.querySelector(".js-list");
// console.dir(list.childNodes[0].textContent = "hello");
// console.dir(list.children);
// console.log([...list.children]);
// [...list.children].forEach(item => console.log(item))
// Array.from(list.children);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

// const li = document.createElement("li");
// const p = document.createElement('p');
// li.append(p);
// p.textContent = list.children.length + 1;
// p.classList.add('item')
// list.append(li)

// // append //додати список
// // appendChild //додати один елемент
// // prepend
// // list.prepend(li)
// // list.appendChild(li)

// console.log(li);

// const markup = `<li>
// <p class="item">${list.children.length + 1}</p>
// </li>`;

// list.insertAdjacentHTML('beforeend',markup)

// const list = document.querySelector(".js-list");
// const itemsStatic = document.querySelectorAll(".js-item");
// const itemsDynamic = document.getElementsByClassName("js-item");

// const markup = `<li class="js-item">${list.children.length + 1}</li>`;

// list.insertAdjacentHTML("beforeend", markup + markup + markup);
// console.log(itemsStatic);
// console.log(itemsDynamic);

// ПЕРЕРВА ДО 21.15

const cars = [
  {
    id: 1,
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 3,
    model: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 4,
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 5,
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
  {
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    model: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
  {
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    model: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
  {
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    model: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
  {
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    model: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
  {
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    model: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 4,
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

// {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   }

const container = document.querySelector(".js-cars");

// cars.forEach(({ img, model, price, type },idx) => {
//   const li = document.createElement("li");
// li.id = idx + 1;
li.setAttribute("li", idx + 1);
//   const image = document.createElement("img");
//   const h2 = document.createElement("h2");
//   const h3 = document.createElement("h3");
//   const p = document.createElement("p");

//   image.src = img;
//   image.alt = model;
//   image.style.width='300px'
//   h2.textContent = model;
//   h3.textContent = type;
//   p.textContent = price;

//   li.append(image,h2,h3,p);
//   container.append(li);
// });

// const markup = cars.map(({ img, model, price, type }) => {
//     const li = document.createElement("li");
//     const image = document.createElement("img");
//     const h2 = document.createElement("h2");
//     const h3 = document.createElement("h3");
//     const p = document.createElement("p");

//     image.src = img;
//     image.alt = model;
//     image.classList.add('car-image')
//     h2.textContent = model;
//     h3.textContent = type;
//     p.textContent = price;

//     li.append(image,h2,h3,p);
//     return li
//   });

//   container.append(...markup);
//   console.log(markup);

const markup = cars
  .map(
    ({ id, img, model, price, type }, idx) => `<li id="${
      idx + 1
    }" data-car-id=${id}><img src="${img}" alt="${model}" class="car-image">
<h2>${model}</h2>
<h3>${type}</h3>
<p>${price}</p>
</li>`
  )
  .join("");

container.insertAdjacentHTML("beforeend", markup);
// [...container.children].forEach((element) => {
//   element.remove();
// });
// container.innerHTML = '';
// container.innerHTML = markup;
// container.addEventListener("click", onClick);
// function onClick(evt) {
//   const parent = evt.target.closest('li');
//   const {carId} = parent.dataset;
//   const currentCar = cars.find(({id}) => Number(carId) === id);
//   console.log(carId);
//   console.dir(currentCar);
// //   const id = parent.getAttribute('data-car-id')
// }
// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }

// понимаю, что скорее всего вам уже надоел вопрос про gpt, но тут на неделе вышла 4я версия в подписке, интересно, пробовали её? А то взглянув на новостной фон создаётся ощущение прям сильного качественного улучшения

// null == 0
// null === 0
// null > 0
// null < 0
// null >= 0
// console.log(null == 0); // false

console.log(Math.min());
console.log(Math.max());
console.log(Math.min() > Math.max());

