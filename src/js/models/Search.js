import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

     async getResults(){
            await axios({
            "method":"GET",
            "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key":"c594507924mshc1e77df05b2b5f5p12361ajsnca86c83e0383"
            },
            "params":{
            "diet":"",
            "excludeIngredients":"",
            "intolerances":"",
            "number":"50",
            "offset":"0",
            "type":"",
            "query":this.query
            }
        })
            .then((response)=>{
            this.result = response.data.results;
            //console.log(this.recipes)
            })
            .catch((error)=>{
            console.log(error)
            })
    }
}