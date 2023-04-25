// CRUD

// C - CREATE - POST
// R - READ   - GET
// U - UPDATE - PATCH PUT
// D - DELETE - DELETE

// POST
// const options = {
//   method: "POST",
//   body: JSON.stringify({
//     name: "Arem",
//     email: "test@gmail.com",
//     password: "strongpassword111",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// fetch("my-api.com",options);

// {
// id:1,
//     name: "Arem",
//     email: "test@gmail.com",
//     password: "strongpassword111",
//   }
// {
//     name: "Artem",
//     email: "test@gmail.com",
//     password: "strongpassword111",
//   }
// PATCH

// const options = {
//   method: "PATCH",
//   body: JSON.stringify({
//     id: 1,
//     name: "Artem",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// fetch("my-api.com", options);

// PUT
// {
//     id:1,
//     name: "Artem"
//   }
// {
//     name: "Artem",
//     email: "test@gmail.com",
//     password: "strongpassword111",
//   }
// const options = {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     name: "Artem",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// fetch("my-api.com", options);

// user

// const user = {
//   email: "STRING",
//   name: "STRING",
//   password: "STRING",
//   years: null,
// };

// const user = {
//     id: uuid(),
//     email: "STRING",
//     name: "STRING",
//     password: "STRING",
//     years: null,
//   };

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Hello cat",
//     body: "Hello dog",
//     userId: 1,
//   }),
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((resp) => {
//     console.log(resp);
//     if (!resp.ok) {
//       switch (resp.status) {
//         case 404:
//           throw new Error("Not found");
//         case 500:
//           throw new Error("Server Error");
//         default:
//           throw new Error(resp.statusText);
//       }
//     }

//     return resp.json();
//   })
//   .then((data) => console.log(data));

// PATCH
// const options = {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     body: "Hello from JS",
//   }),
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
// .then((resp) => {
//   console.log(resp);
//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }

//   return resp.json();
// })
// .then(data => console.log(data))
// .catch(err => console.error( "ERROR" + ' ' + err))

// PUT

// const options = {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: 'Hello cat',
//     body: "Hello from JS",
//     userId: 1
//   }),
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((resp) => {
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.error("ERROR" + " " + err));

// DELETE
// const options = {
//   method: "DELETE",
// };
// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((resp) => {
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.error("ERROR" + " " + err));

// Перерва до 21.12

// const addComment = document.querySelector(".add-comment");
// const list = document.querySelector(".js-list");
// const errText = document.querySelector(".js-error-message");
// const formContainer = document.querySelector(".js-form-container");

// addComment.addEventListener("click", handlerAddComment);

// function handlerAddComment() {
//   formContainer.innerHTML = `<form action="submit" class="js-form">
//     <input type="text" name="title">
//     <textarea name="comment" cols="30" rows="10"></textarea>
//     <button>Додати Відгук</button>
// </form>`;

//   const form = document.querySelector(".js-form");
//   form.addEventListener("submit", handlerSubmitForm);
// }

// function handlerSubmitForm(evt) {
//   evt.preventDefault();
//   const { title, comment } = evt.currentTarget.elements;
//   const data = {
//     userId: 1,
//     title: title.value,
//     body: comment.value,
//   };

//   addCommentService(data)
//     .then((data) => {
//       list.insertAdjacentHTML("beforeend", createCommentMarkup(data));
//     })
//     .catch(() => {
//       errText.textContent = "Сервіс не доступний";
//       setTimeout(() => {
//         errText.textContent = "";
//       }, 2000);
//     })
//     .finally(() => {
//       formContainer.innerHTML = "";
//     });
// }

// function createCommentMarkup({ title, body, id }) {
//   return `<li data-id="${id}">
//     <h2>${title}</h2>
//     <p>${body}</p>
//     <button>Видалити відгук</button>
//     </li>`;
// }

// function addCommentService(data) {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };

//   return fetch("https://jsonplaceholder.typicode.com/posts", options).then(
//     (resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     }
//   );
// }

// CRUD

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     action: "D"
//   }),
// };

// Запитання з доки
// const addComment = document.querySelector(".add-comment");
// const list = document.querySelector(".js-list");
// const errText = document.querySelector(".js-error-message");
// const formContainer = document.querySelector(".js-form-container");
// const MESSAGE_LIMIT= 3;
// let counterMessage = 0;

// addComment.addEventListener("click", handlerAddComment);

// function handlerAddComment() {
// //   formContainer.innerHTML = ``;

// }

// const form = document.querySelector(".js-form");
// form.addEventListener("submit", handlerSubmitForm);
// function handlerSubmitForm(evt) {
//   evt.preventDefault();

//   const { title, comment } = evt.currentTarget.elements;
//   const btnSubmit = document.querySelector('.js-form-button')
//   const data = {
//     userId: 1,
//     title: title.value,
//     body: comment.value,
//   };

//   if (!counterMessage) {
//     counterMessage += 1;
//     setTimeout(() => {
//         counterMessage = 0;
//         btnSubmit.disabled = false
//     }, 15000);
//   } else {
//     counterMessage += 1;
//     if(counterMessage  === MESSAGE_LIMIT){
//         btnSubmit.disabled = true
//     }

//   }

//   evt.currentTarget.reset()
//   addCommentService(data)
//     .then((data) => {
//       list.insertAdjacentHTML("beforeend", createCommentMarkup(data));
//     })
//     .catch(() => {
//       errText.textContent = "Сервіс не доступний";
//       setTimeout(() => {
//         errText.textContent = "";
//       }, 2000);
//     })
//     // .finally(() => {
//     //   formContainer.innerHTML = "";
//     // });
// }

// function createCommentMarkup({ title, body, id }) {
//   return `<li data-id="${id}">
//     <h2>${title}</h2>
//     <p>${body}</p>
//     <button>Видалити відгук</button>
//     </li>`;
// }

// function addCommentService(data) {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };

//   return fetch("https://jsonplaceholder.typicode.com/posts", options).then(
//     (resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     }
//   );
// }

function getPictures(pictureName, page) {
  const URL = `https://pixabay.com/api/?key=35723548-55cce6d92fe2b0376e8aa06a2&q="${pictureName}"
    &image_type="photo"&orientation="horizontal"&safesearch="true"&per_page=200&page=${page}`;
  return fetch(URL).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  }).then(data => console.log(data));
}
getPictures("cat", 3);

// let counter = 0;

// function createMarkup(arr){
//     return arr.filter(item => {
//         counter +=1
//         if(counter > 500){
//             return false
//         }

//         return `li`

//     })
// }
