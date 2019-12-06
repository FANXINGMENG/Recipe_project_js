import axios from 'axios';

export default class Recipe {

        constructor(id) {
                this.id = id;
        }

        async getRecipe() {
            axios({
                "method":"GET",
                "url":`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.id}/ingredientWidget.json`,
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key":"c594507924mshc1e77df05b2b5f5p12361ajsnca86c83e0383"
                }
                })
                .then((response)=>{
                  this.result = response.data.ingredients
                  console.log(response)
                })
                .catch((error)=>{
                  console.log(error)
                })
        }

        calcServings() {
            this.servings = 4;
        }
        parseIngredients() {
            const unitsLong = ['tablespoons', 'tablespoon', 'ounce', 'ounce', 'teaspoon'];
            const unitsShort = ['tbsp','tbsp','oz','oz','tsp',]

            const newIngredients = this.ingredients.map(el => {
                // 1. unifor,ingredient. unit and  units
                let ingredient = el.toLowerCase();
                unitsLong.forEach((unit, i) => {
                    ingredient = ingredient
                }

                )
                // 2. remove parentheses

                // 3. parse ingredients into count 
            });
            this.ingredients = newIngredients;
        }
}
