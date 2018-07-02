import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE } from '../actions';

function recipes(state= [], action){
    if (action.type === SET_RECIPES) {
        return action.items;
    }else{
        return state;
    }
}

function favoriteRecipes(state= [], action){
    if(action.type === FAVORITE_RECIPE){
        state = [...state, action.recipe];
        return state;
    }else{
        return state;
    }
}

const rootReducer = combineReducers({ recipes, favoriteRecipes});

export default rootReducer;