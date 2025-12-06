// // import './style.css'
// // import javascriptLogo from './javascript.svg'
// // import viteLogo from '/vite.svg'
// // import { setupCounter } from './counter.js'

// // document.querySelector('#app').innerHTML = `
// //   <div>
// //     <a href="https://vite.dev" target="_blank">
// //       <img src="${viteLogo}" class="logo" alt="Vite logo" />
// //     </a>
// //     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
// //       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// //     </a>
// //     <h1>Hello Vite!</h1>
// //     <div class="card">
// //       <button id="counter" type="button"></button>
// //     </div>
// //     <p class="read-the-docs">
// //       Click on the Vite logo to learn more
// //     </p>
// //   </div>
// // `

// // setupCounter(document.querySelector('#counter'))


// // "Application ID"
// // '5d908bd3'



// // "Application Keys"
// // 'ff27b2b3a487e4c4773e1ff42709c416'
// // 'https://api.edamam.com/api/recipes/v2'

// // async function getData() {
// //   const response = await fetch('https://api.edamam.com/api/recipes/v2'); // request
// //   const data = await response.json(); // parse the JSON data
// //   console.log(data); // temp output test of data response 
// // }

// // getData();

// // 

// const APP_ID = "5d908bd3";
// const APP_KEY = "ff27b2b3a487e4c4773e1ff42709c416";
// const SEARCH_QUERY = "pasta";

// // Construct the full URL
// const apiUrl = `api.edamam.com{SEARCH_QUERY}&app_id=${APP_ID}&app_key=${APP_KEY}`;

// // Use fetch to make the GET request
// fetch(apiUrl)
//     .then(response => {
//         // Check if the request was successful (status 200-299)
//         if (!response.ok) {
//             // If not, throw an error with the status message
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         // Parse the JSON data from the response body
//         return response.json();
//     })
//     .then(data => {
//         // Handle the successful data response here
//         console.log("Data received:", data);

//         // Example: Iterate over the recipes (hits)
//         if (data.hits && data.hits.length > 0) {
//             data.hits.forEach((hit, index) => {
//                 console.log(`Recipe ${index + 1}: ${hit.recipe.label}`);
//             });
//         }
//     })
//     .catch(error => {
//         // Handle any errors that occurred during the fetch operation or in the .then blocks
//         console.error("There was a problem with the fetch operation:", error);
//     });
