import * as model from './model.js';
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";
import bookmarksView from "./views/bookmarksView";
import addRecipeView from "./views/addRecipeView";

import 'core-js/stable';
import 'regenerator-runtime/runtime';
//import {state} from "./model.js";
import {acync} from 'regenerator-runtime';
import {state} from "./model.js";

// if (module.hot){
//     module.hot.accept();
// }

const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        //update results view to mark selected search results
        resultsView.update(model.getSearchResultsPage());

        //updating bookmarks view
        bookmarksView.update(model.state.bookmarks);

        //loading recipe
        await model.loadRecipe(id);

        //rendering recipe
        recipeView.render(model.state.recipe);
    } catch (err) {
        recipeView.renderError();
        console.error(err);
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
        //resultsView.render(model.state.search.results);
        resultsView.render(model.getSearchResultsPage());

        //render initial pagination buttons
        paginationView.render(model.state.search);

    } catch (err) {
        console.log(err);
    }
};
//controlSearchResults();

const controlPagination = function (goToPage) {
    //render new results
    resultsView.render(model.getSearchResultsPage(goToPage));
    //render new pagination button
    paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
    //update the recipe servings (in state)
    model.updateServings(newServings);

    //update the recipe view
    //recipeView.render(model.state.recipe);
    recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
    //add/remove bookmark
    if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
    else model.deleteBookmark(model.state.recipe.id);

    //update recipe view
    recipeView.update(model.state.recipe);

    //render bookmarks
    bookmarksView.render(model.state.bookmarks);
}

const controlBookmarks= function (){
    bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = function (newRecipe){
    console.log(newRecipe);

    //upload new recipe data
}

const init = function () {
    bookmarksView.addHandlerRender(controlBookmarks);
    recipeView.addHandlerRender(controlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerAddBookmark(controlAddBookmark);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
    addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
