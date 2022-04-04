import { ActionTypes } from "../constants/action-types";

export const setAnimes = (animes) => {
    return {
        type: ActionTypes.SET_ANIMES,
        payload: animes,
    };
};

export const selectedAnime = (anime) => {
    return {
        type: ActionTypes.SELECTED_ANIME,
        payload: anime,
    };
};

export const removeSelectedAnime = (anime) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_ANIME,
        payload: anime,
    };
};
