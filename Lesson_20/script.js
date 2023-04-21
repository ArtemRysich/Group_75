// https://the-one-api.dev/
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map?retiredLocale=uk
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
// const BASE_URL = "https://the-one-api.dev/v2";
// const ENDPOINT = "/character";
// const TOKEN = "18aEQHs2_l3sCMmPg1yk";
// const option = {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${TOKEN}`,
//   },
// };

// const option2 = {
//     method: "POST",
//     body: {
//         name : 'Artem',
//         email: 'test@gmail.com',
//         password: '12345'
//     },
//     headers:{
//       Authorization: `Bearer ${TOKEN}`
//     }
//   };

// fetch(`${BASE_URL}${ENDPOINT}?limit=50&page=19 `, option)
//   .then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// --------------------------------------------------------------------------------------------//
// const list = document.querySelector(".js-list");
// const paginationBtn = document.querySelector(".js-pagination");
// const BASE_URL = "https://api.themoviedb.org/3";
// const ENDPOINT = "/trending/movie/week";
// const API_KEY = "345007f9ab440e5b86cef51be6397df1";
// let currentPage = 1;

// paginationBtn.addEventListener("click", onPagination);

// function onPagination() {
//   currentPage += 1;
//   getTrending(currentPage)
//     .then((data) => {
//       list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//       if (data.page === data.total_pages) {
//         paginationBtn.hidden = true;
//       }
//     })
//     .catch((err) => console.log(err));
// }

// function getTrending(page = 1) {
//   return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(
//     (resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     }
//   );
// }

// getTrending()
//   .then((data) => {
//     list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//     if (data.page !== data.total_pages) {
//         paginationBtn.hidden = false;
//     }
//   })
//   .catch((err) => console.log(err));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title, vote_average }) => `<li>
//     <img src="${
//       poster_path
//         ? "https://image.tmdb.org/t/p/w400" + poster_path // "https://image.tmdb.org/t/p/w400null"
//         : "https://www.reelviews.net/resources/img/default_poster.jpg"
//     }" width="400" alt="${title}">
//     <p>${vote_average || "Not found"}</p>
//     <h2>${title || "No name"}</h2>
// </li>`
//     )
//     .join("");
// }

// // Перерва до 21.20

// document.addEventListener('scroll', onScroll);
// let counter = 0;
// function onScroll(){
// counter+=1
// console.log(counter);
// }

// Observer

// const list = document.querySelector(".js-list");
// const guard = document.querySelector(".js-guard");
// // const guard2 = document.querySelector('.js-guard2')
// const BASE_URL = "https://api.themoviedb.org/3";
// const ENDPOINT = "/trending/movie/week";
// const API_KEY = "345007f9ab440e5b86cef51be6397df1";
// const options = {
//   root: null,
//   rootMargin: "1900px",
//   threshold: 0,
// };

// const observer = new IntersectionObserver(onPagination, options);
// let currentPage = 998;

// // observer.observe(guard2)

// function getTrending(page = 1) {
//   return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(
//     (resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     }
//   );
// }

// getTrending()
//   .then((data) => {
//     list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//     if (data.page !== data.total_pages) {
//       observer.observe(guard);
//     }
//   })
//   .catch((err) => console.log(err));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title, vote_average }) => `<li>
//       <img src="${
//         poster_path
//           ? "https://image.tmdb.org/t/p/w400" + poster_path // "https://image.tmdb.org/t/p/w400null"
//           : "https://www.reelviews.net/resources/img/default_poster.jpg"
//       }" width="400" alt="${title}">
//       <p>${vote_average || "Not found"}</p>
//       <h2>${title || "No name"}</h2>
//   </li>`
//     )
//     .join("");
// }

// function onPagination(entries, observer) {
//   // console.log(entries);
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       currentPage += 1;
//       getTrending(currentPage).then((data) => {
//         list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//         if(data.page === data.total_pages){
//             observer.unobserve(guard)
//         }
//       });
//     }
//   });
// }

// const mySet = new Set([1, 2, 1, 4, 3, 2]);
// console.log('mySet', mySet);
// const result = [...mySet];
// console.log(result);

// чому не працює fetchСountries? Це з використанням RESTCountries

//Input selector
// const inputElement = document.querySelector('input');
// const list = document.querySelector('.countries-list');
// console.log(`${inputElement}`);
// //Url
// const BASE_URL = `https://restcountries.com/v3.1/`;

// //JSON
// const END_POINT = `/name/${inputElement}.json`;

// //Event listener for the input
// inputElement.addEventListener('input', onInput);

// function onInput(evt) {
//   evt.preventDefault();
//   const name = evt.currentTarget.value;
//   const END_POINT = `/name/${name}.json`;

//   fetchCountries(name)
//     .then(data => (list.innerHTML = createMarkup(data.name)))
//     .catch(err => console.log(err));
// }

// function fetchCountries(name) {
//   const URL = `${BASE_URL}${END_POINT}?&name=${name}`;
//   return fetch(URL)
//   .then(resp => {
//       if (!resp.ok) {
//         // resp.ok === false
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     });
//   }

const form = document.querySelector("form");
const KEY = "form-data";
let data = JSON.parse(sessionStorage.getItem(KEY)) ?? {};

form.addEventListener("submit", onSubmit);
form.addEventListener("input", onInput);

function onSubmit(evt) {
  evt.preventDefault();
  console.log(data);
  data = {};
  sessionStorage.removeItem(KEY)
  evt.currentTarget.reset();
}
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE?retiredLocale=uk
(function(){
const {email, message} = form.elements;
email.value = data.email || '';
message.value = data.message || '';
})()


function onInput(evt) {
  const { name, value } = evt.target;
  data[name] = value;

  sessionStorage.setItem(KEY, JSON.stringify(data));
}
    