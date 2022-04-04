import { ActionTypes } from "../constants/action-types";

const initialState = {
    animes: [],
}

export const animeReducer = (state=initialState,{type, payload})=>{
    switch(type){
        case ActionTypes.SET_ANIMES:
            return {...state, animes: payload};
        default:
            return state;
    }
}

export const selectedReducer = (state={}, {type, payload})=>{
    switch(type){
        case ActionTypes.SELECTED_ANIME:
            return{...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_ANIME:
            return {};
        default:
            return state;
    }
}