

const bodySection = document.getElementById('section');
const bodys = document.getElementById('sec');
const insertFood = document.getElementById('insertFood');
const searchButton = document.getElementById('searchButton');



searchButton.addEventListener('click', (e) => {
    const value = insertFood.value;
    console.log(value)
    e.preventDefault();
  

    const API =`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=POnD7pUtzfpzdMNqXJxCpf4R0CkYX5fQdCI4hYDJ&query=${value}`

    fetch(API)
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

            if (data.foods) {
                data.foods.forEach(meal => {
                    const section = document.createElement('section');
                    // const img = document.createElement('img');
                    const instructionDiv = document.createElement('div');
                    // const section = document.createElement('section');

                    const h2 = document.createElement('h1');
                    // const h2 = document.createElement('h2');
                    // const h2 = document.createElement('h2');
                    // const h2 = document.createElement('h2');
                    // const h2 = document.createElement('h2');
                    // const h2 = document.createElement('h2');
                    // const h2 = document.createElement('h2');
                    // const youTubeLink = document.createElement('a');
                    h2.textContent = `${meal.description}`;

                    section.appendChild(h2);
                    bodySection.appendChild(section);
      
                    meal.foodNutrients.forEach(meal => {
                        // const se = document.createElement('section');

                        const h2 = document.createElement('h2');
                        h2.textContent = `${meal.nutrientName}`;

                        section.appendChild(h2);

                        section.classList.add('sectionBody');

                    
                    })
                })
            } else {
                console.log("Nothig found.");
            }
        })
})