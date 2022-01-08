import {
	GET_SAVED_TRACKS_SUCCESS,
	GET_SAVED_PLAYLISTS_SUCCESS,
	GET_SAVED_PLAYLISTS_ERROR,
	GET_SAVED_TRACKS_ERROR,
} from './types';
import { AnyAction } from 'redux';

export const initialState = {
	playlist: [],
	playlists: [],
};

export const library = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case GET_SAVED_TRACKS_SUCCESS:
			return {
				...state,
				playlist: action.payload.items,
			};
		case GET_SAVED_PLAYLISTS_SUCCESS:
			return {
				...state,
				playlists: action.payload.items,
			};
		case GET_SAVED_TRACKS_ERROR:
			return {
				...state,
				playlist: action.payload,
			};
		case GET_SAVED_PLAYLISTS_ERROR:
			return {
				...state,
				playlists: action.payload,
			};
		default:
			return state;
	}
};
