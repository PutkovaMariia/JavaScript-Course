import * as model from './model.js';
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";

import 'core-js/stable';
import 'regenerator-runtime/runtime';
//import {state} from "./model.js";
import {acync} from 'regenerator-runtime';

if (module.hot){
    module.hot.accept();
}

const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        //loading recipe
        await model.loadRecipe(id);

        //rendering recipe
        recipeView.render(model.state.recipe);
    } catch (err) {
        recipeView.renderError();
    }
}

//controlRecipes();//????he doesn't have it

const controlSearchResults = async function () {
    try {
        resultsView.renderSpinner();

        //get search query
        const query = searchView.getQuery();
        if (!query) return;

        //load search results
        await model.loadSearchResults(query);

        //render results
        resultsView.render(model.state.search.results);
    } catch (err) {
        console.log(err);
    }
};
controlSearchResults();

const init = function () {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);
}
init();

//const recipeContainer = document.querySelector('.recipe');