// // const form = document.querySelector('.js-form');

// // form.addEventListener('submit', handlerForm)

// // function handlerForm(evt) {
// //     evt.preventDefault()
// //     console.dir(evt.currentTarget);
// //     const { email, password } = evt.currentTarget.elements;
// //     const data ={
// //         email: email.value,
// //         password: password.value
// //     }
// // }

// // function handlerForm(evt) {
// //     evt.preventDefault()
// //     const formData = new FormData(evt.currentTarget);
// //     // const arr = formData.getAll('email');
// //     // console.log(arr);

// //     // const keys = formData.keys();
// //     // const data = {};
// //     // for (const key of keys) {
// //     //     data[key] = formData.get(key)
// //     // }
// //     // console.log(data);
// //     //---------------------------
// //     // const keys = formData.keys();
// //     // const data = {};
// //     // let key = keys.next().value;

// //     // while (formData.has(key)) {
// //     //     data[key] = formData.get(key);
// //     //     key = keys.next().value;
// //     // }

// //     // console.log(data);


// //     // key = keys.next();
// //     // console.log(key);

// //     // key = keys.next();
// //     // console.log(key);

// //     //---------------------------------
// //     // const data = {};
// //     // formData.forEach((value, key) => data[key] = value);
// //     // console.log(data);
// // }

// //-----------------------------------------------------------------
// // class Hero {
// //     constructor(race, hp, mana, lvl = 1) {
// //         this.race = race;
// //         this.hp = hp;
// //         this.mana = mana;
// //         this.lvl = lvl;
// //     }
// //     getHP(){
// //         alert(this.hp);
// //     }
// // }

// // const hero1 = new Hero('Human', 1200, 1000)
// // console.log(hero1);
// // // hero1.getHP();

// // const hero2 = new Hero('Elf', 1000, 900)
// // console.log(hero2);
// // hero2.getHP();





// //---------------------------------------------
// // https://www.npmjs.com/package/tui-pagination
// // const pagination = document.querySelector('.js-pagination')


// // async function getHero(page = 10) {
// //     const TOKEN = '18aEQHs2_l3sCMmPg1yk'
// //     const options = {
// //         headers: {
// //             Authorization: `Bearer ${TOKEN}`
// //         }
// //     }
// //     const resp = await fetch(`https://the-one-api.dev/v2/character?page=${page}&limit=40`, options)
// //     if (!resp.ok) {
// //         throw new Error(resp.statusText)
// //     }
// //     const data = await resp.json()
// //     return data;
// // }


// // getHero().then(data => {
// //     createPaginataion(data.page, data.pages)
// // }).catch(err => console.log(err))


// // function createPaginataion(currentPage, lastPage) {
// //     let markup = '';

// //     if (currentPage > 1) {
// //         markup = `<li class="js-pagination-item">1</li>`
// //     }

// //     if (currentPage > 4) {
// //         markup += `<li>...</li>`
// //     }

// //     if (currentPage > 3) {
// //         markup += `<li class="js-pagination-item">${currentPage - 2}</li>`
// //     }
// //     if (currentPage > 2) {
// //         markup += `<li class="js-pagination-item">${currentPage - 1}</li>`
// //     }

// //     markup += `<li class="current js-pagination-item">${currentPage}</li>`

// //     if (currentPage < lastPage - 3) {
// //         markup += `<li class="js-pagination-item">${currentPage + 1}</li>`
// //     }
// //     if (currentPage < lastPage - 2) {
// //         markup += `<li class="js-pagination-item">${currentPage + 2}</li>`
// //     }

// //     if (currentPage < lastPage - 4) {
// //         markup += `<li>...</li>`
// //     }

// //     if (currentPage < lastPage) {
// //         markup += `<li class="js-pagination-item">${lastPage}</li>`
// //     }


// //     pagination.innerHTML = markup;
// // }

// // pagination.addEventListener('click', handlerPagination);
// // function handlerPagination(evt) {
// //     if (!evt.target.classList.contains('js-pagination-item')) {
// //         return;
// //     }


// //     const page = evt.target.textContent
// //     getHero(page).then(data => {
// //         createPaginataion(data.page, data.pages)
// //     }).catch(err => console.log(err))
// // }



// // import axios from 'axios'


// // async function serviceImg(query, page = 1) {
// //     try{
// //     const API_KEY = '35967279-8c24489aaedeeb926c95777ea';
// //     const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

// //     const resp = await axios.get(API_URL)
// //     return resp
// //     // const data = await resp.json()
// //     }
// //     // return data
// //     // return resp.json()
// // }

// // // serviceImg('cat').then(data => {}).catch()

// // export {serviceImg}




// // Перерва до 21.35

// // function getImg(query) {
// //     const API_KEY = '35967279-8c24489aaedeeb926c95777ea';
// //     const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`;
// //     const resp = fetch(API_URL)
// //     resp.then(resp => resp.json()).then(data => console.log(data))

// // }
// // getImg('cat');

// // console.log('start');
// // async function getImg(query) {

// //     const API_KEY = '35967279-8c24489aaedeeb926c95777ea';
// //     const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`;
// //     const resp = await fetch(API_URL);
// //     const data = await resp.json();
// //     console.log(data);

// // }
// // getImg('cat');
// // console.log('end');

// createFetch(searchQuery)
//     .then(data => {
//         if (!data.total) {
//             ref.gallery.innerHTML = '';
//             ref.form.reset();
//             throw new Error();
//         }

//         ref.gallery.innerHTML = '';
//         page = 1;

//         createMarkupCard(data.hits);
//         Notify.info(`Hooray! We found ${data.totalHits} images.`);

//         ref.loadMoreBtn.addEventListener('click', onLoadMore);
//     })
//     .catch(() => {
//         Notify.failure(
//             'Sorry, there are no images matching your search query. Please try again.'
//         );
//     });

// ref.container.style.backgroundColor = getRandomHexColor();


// //Функція створення розмітки для карток
// // function createMarkupCard(arr) {
// //     const array = arr.map(({
// //         webformatURL,
// //         largeImageURL,
// //         tags,
// //         likes,
// //         views,
// //         comments,
// //         downloads,
// //     }) => {
// //         return `
// // <div class="photo-card">
// // <a href="${largeImageURL}">
// // <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
// // </a>
// //   <div class="info">
// //     <p class="info-item">
// //       <b>Likes:<span>${likes}</span></b>
// //     </p>
// //     <p class="info-item">
// //       <b>Views:<span>${views}</span></b>
// //     </p>
// //     <p class="info-item">
// //       <b>Comments:<span>${comments}</span></b>
// //     </p>
// //     <p class="info-item">
// //       <b>Downloads:<span>${downloads}</span></b>
// //     </p>
// //   </div>
// // </div>
// // `;
// //     }
// //     )
// //         .join('');

// //     ref.gallery.insertAdjacentHTML('beforeend', array);
// //     ref.loadMoreBtn.style.display = 'block';
// // }