


// // const APP_ID = "5d908bd3";
// // const APP_KEY = "ff27b2b3a487e4c4773e1ff42709c416";
// // const SEARCH_QUERY = "pasta";
// // const apiUrl = `api.edamam.com{SEARCH_QUERY}&app_id=${APP_ID}&app_key=${APP_KEY}`;

// // fetch(apiUrl)
// //     .then(response => {
// //         // --- ADDED: Check the raw response status and type first ---
// //         if (!response.ok) {
// //             console.error(`API request failed with status: ${response.status}`);
// //         }
        
// //         // Return the response object to the next .then() block
// //         return response.text(); // Use .text() instead of .json() temporarily
// //     })
// //     .then(textData => {
// //         // --- ADDED: Log the raw response text to see what you received ---
// //         console.log("Raw response received:", textData);
        
// //         // Now attempt to parse it as JSON *after* inspecting the raw text
// //         try {
// //             const jsonData = JSON.parse(textData);
// //             console.log("Successfully parsed JSON data:", jsonData);
// //             // Proceed with your data handling here (e.g., jsonData.hits.forEach(...))
// //         } catch (e) {
// //             console.error("Failed to parse JSON. The raw data above likely contains HTML/plain text error message.");
// //             console.error("Parsing error details:", e);
// //         }
// //     })
// //     .catch(error => {
// //         // Handle network errors (e.g., no internet connection, DNS issue)
// //         console.error("A network error occurred during the fetch operation:", error);
// //     });


// const APP_ID = "5d908bd3";
// const APP_KEY = "ff27b2b3a487e4c4773e1ff42709c416";
// const SEARCH_QUERY = "pasta";
// const TYPE = "public"
// // const apiUrl = `api.edamam.com{"pasta"}&app_id=${APP_ID}&app_key=${APP_KEY}`;
// const api = `${"https://api.edamam.com/doc/open-api/recipe-search-v2.yaml"}?app_id=${APP_ID}&app_key=${APP_KEY}&type=${TYPE}`;
// async function getTodo() {
//   try {
//     const response = await fetch(api);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const json = await response.text();
//       console.log(json);
//   } catch (error) {
//     console.error('There was a problem fetching the data:', error);
//   }
// }

// // todo.textContent = 'Loading...';
// getTodo();

// const body = document.getElementsByTagName('body');
// const bod = document.getElementsByTagName('section');


const bodyTag = document.getElementById('section')
const insertFood = document.getElementById('insertFood');
const searchButton = document.getElementById('searchButton');



searchButton.addEventListener('click', (e) => {
    const value = insertFood.value;
    // e.preventDefault();
  
    // section.textContent = value;
    console.log(value);


    // Define the endpoint URL
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;

    // Make the GET request using fetch
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Parse the response body as JSON
            return response.json();
        })
        .then(data => {
            // Handle the resulting data
            // console.log("Meals starting with 'C':", data.meals);

            if (data.meals) {
                data.meals.forEach(meal => {
                    const section = document.createElement('section');
                    const img = document.createElement('img');
                    const instructionDiv = document.createElement('div');
                    const h2 = document.createElement('h2');
                    const youTubeLink = document.createElement('a');


                    // console.log(`- ${meal.strMeal} `);
                    h2.textContent = `${meal.strMeal}`
                    img.setAttribute('src', `${meal.strMealThumb}`);
                    instructionDiv.textContent = `${meal.strInstructions}`;
                    youTubeLink.href = `${meal.strYoutube}`;
                    youTubeLink.textContent = "Click here for video instruction."
                    youTubeLink.target = "_blank";
                
                    section.appendChild(img);
                    section.appendChild(h2);
                    section.appendChild(instructionDiv);
                    section.appendChild(youTubeLink);
                    // section.appendChild(section);

                    bodyTag.appendChild(section);

                
                });
           
            


            } else {
                console.log("No meals found.");
            }
        })
        .catch(error => {
            console.error("There was an error fetching the meal data:", error);
        });

});
