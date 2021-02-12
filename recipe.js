const APP_ID = "f29f1275";
const APP_key = "a96c50a69b6d7277f4637d60e0c9dbaf";
const recipeData = document.getElementById('recipe-data');


document.getElementById('recipe-btn').addEventListener('click', function(event){
  event.preventDefault();
  searchQuery = document.getElementById("recipe-text").value;
  fetchAPI();
  console.log(searchQuery);
})
function fetchAPI(){
  searchQuery = document.getElementById("recipe-text").value;
  fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`)
  .then(response => response.json())
  .then(data =>showRecipe(data.hits))
  .catch(error => console.log(error));
}
function showRecipe(data){
  let recipeTxt = "";
  data.map((result) =>
    recipeTxt += `
    <div class= "data-container">
      <h3>${result.recipe.label}</h3>
      <img src="${result.recipe.image}" alt="img">
      <br/>
      <input type ="button" onclick="location.href ='${result.recipe.url}'" value ="View Recipe" id="recipe-button">
      <p class="calories">Calories: ${result.recipe.calories.toFixed(1)}</p>
      <p class="serving" >Number of Servings: ${result.recipe.yield}</p>
      
    </div>
    `
  );
 recipeData.innerHTML = recipeTxt;


}
