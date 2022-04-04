import { combineReducers } from "redux";
import { animeReducer, selectedReducer } from "./animeReducer";

const reducers = combineReducers({
    allAnimes: animeReducer,
    anime: selectedReducer,
})

export default reducers