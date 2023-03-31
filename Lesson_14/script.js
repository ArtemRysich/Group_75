// https://bundlephobia.com/

// const input = document.querySelector(".js-input");
// // input.addEventListener("input", _.debounce(onSearch,800,{
// //     trailing:true,//true
// //     leading:false//false
// // }));

// input.addEventListener(
//   "input",
//   _.throttle(onSearch, 10000, {
//     trailing: true, //true
//     leading: true, //true
//   })
// );
// const data = [
//   { name: "Samsung", price: 20000 },
//   { name: "Iphone", price: 50000 },
//   { name: "Xiomi", price: 10000 },
//   { name: "Samsung", price: 30000 },
//   { name: "Iphone", price: 60000 },
//   { name: "Xiomi", price: 20000 },
//   { name: "Samsung", price: 40000 },
//   { name: "Iphone", price: 70000 },
//   { name: "Xiomi", price: 30000 },
// ];

// function onSearch(evt) {
//   // console.log(evt);
//   // console.log(evt.currentTarget);
//   const { value } = evt.target;
//   const result = data.filter((item) =>
//     item.name.toLowerCase().includes(value.toLowerCase())
//   );
//   console.log(result);
// }
// console.log();

// ПЕРЕРВА ДО 21.12

// const cats = [
//     "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
//     "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
//     "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
//     "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
//     "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
//     "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//     "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//     "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//     "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
//     "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
//     "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg",
//     "https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU",
//   ];
// console.log(cats.length);
// const list = document.querySelector('.js-list');

// const markup = cats.map(link => `<li>
// <img loading="auto" src="${link}" alt="cat" width="400">
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in fuga eveniet error autem quae nobis doloribus maxime ratione? Cupiditate vitae, sequi dolorem a earum officia vel eaque repudiandae! Voluptatem.</p>
// </li>`)
// list.insertAdjacentHTML('beforeend', markup.join(''))

// 1 підключення

// 2 Ініціалізація представника класу (API)
const instance = basicLightbox.create(
  `
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`,
  {
    /*
     * Prevents the lightbox from closing when clicking its background.
     */
    closable: true,
    /*
     * One or more space separated classes to be added to the basicLightbox element.
     */
    className: "",
    /*
     * Function that gets executed before the lightbox will be shown.
     * Returning false will prevent the lightbox from showing.
     */
    onShow: (instance) => {console.log('modal OPEN');},
    /*
     * Function that gets executed before the lightbox closes.
     * Returning false will prevent the lightbox from closing.
     */
    onClose: (instance) => {console.log('modal Close')},
  }
);
// console.log(instance);
// // 3 Методи представника класу

instance.show();

setTimeout(()=>{instance.close()},5000)
// 4 Блок опцій
// {
//     /*
//      * Prevents the lightbox from closing when clicking its background.
//      */
//     closable: true,
//     /*
//      * One or more space separated classes to be added to the basicLightbox element.
//      */
//     className: "",
//     /*
//      * Function that gets executed before the lightbox will be shown.
//      * Returning false will prevent the lightbox from showing.
//      */
//     onShow: (instance) => {console.log('modal OPEN');},
//     /*
//      * Function that gets executed before the lightbox closes.
//      * Returning false will prevent the lightbox from closing.
//      */
//     onClose: (instance) => {console.log('modal Close')},
//   }

// document.addEventListener('keydown',onKey);

// function onKey(evt){
//     console.log(evt);
// }

// const second = document.querySelector('.second')
// const first = second.querySelector('.first')
// console.log(first.classList.contains('second'));

// console.log(first.closest('.second'));

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

const products = [
  {
    id: "sku1",
    qty: 1,
  },
  {
    id: "sku2",
    qty: 2,
  },
  {
    id: "sku3",
    qty: 3,
  },
  {
    id: "sku1",
    qty: 6,
  },
  {
    id: "sku1",
    qty: 8,
  },
  {
    id: "sku1",
    qty: 6,
  },
  {
    id: "sku2",
    qty: 19,
  },
  {
    id: "sku4",
    qty: 1,
  },
  {
    id: "sku1",
    qty: 8,
  },
];
const arr = [false, undefined, null, false, 1,false, false, "", 0, NaN,1 ,false,false];
for (let i = arr.length - 1; i >= 0; i -= 1) {
  if (!arr[i]) {
    arr.splice(i, 1);
  }
}
console.log(arr);
function foo(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i].id === arr[j].id) {
        arr[i].qty += arr[j].qty;
        arr.splice(j, 1);
        j -= 1;
      }
    }
  }
}
foo(products);
console.log(products);
