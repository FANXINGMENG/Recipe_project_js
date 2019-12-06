import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe';


    // Global state of the app
    // search object
    // current recipe object
    // shopping list object
    // liked recipes

const state = {};

const controlSearch = async () => {
        // 1. get query from view
     const query = searchView.getInput();
     console.log(query);
     if(query) {
        // 2. new search object and add to state
        state.search = new Search(query);

         // 3.pripare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
         // 4. Search for recipes
        await state.search.getResults();

        // 5. render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    console.log(btn);
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

//Recipe controller
const controlRecipe = async () => {
    // Get ID from URL
    const id = window.location.hash.replace('#', '');

    if(id) {
        // Prepare UI for changes
        renderLoader(elements.recipe);
        //create new recipe object
        state.recipe = new Recipe(id);
        //get recipe data
        await state.recipe.getRecipe();
        //render recipe
        clearLoader();
        recipeView.renderRecipe(state.recipe.result);
    }
};

['hashchange','load'].forEach(event => window.addEventListener(event, controlRecipe));