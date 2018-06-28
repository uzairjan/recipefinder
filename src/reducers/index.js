import { combineReducers } from 'redux';
import { SET_RECIPES } from '../actions';

function recipes(state= [], action){
    if (action.type === SET_RECIPES) {
        return action.item;
    }else{
        return state;
    }
}

const rootReducer = combineReducers({ recipes});

export default rootReducer;