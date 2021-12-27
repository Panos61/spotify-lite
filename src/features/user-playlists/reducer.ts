import {
	GET_RECENTLY_PLAYED_SUCCESS,
	GET_RECENTLY_PLAYED_ERROR,
	GET_TOP_ARTISTS_SUCCESS,
	GET_TOP_ARTISTS_ERROR,
	GET_NEWALBUMS_SUCCESS,
	GET_NEWALBUMS_ERROR,
	GET_FEATUREDPLAYLISTS_ERROR,
	GET_FEATUREDPLAYLISTS_SUCCESS,
} from './types';
import { AnyAction } from 'redux';

export const initialState = {
	playlist: [],
	artists: [],
	albums: [],
	playlists: [],
};

export const userPlaylists = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case GET_RECENTLY_PLAYED_SUCCESS:
			return {
				...state,
				playlist: action.payload.items,
			};
		case GET_TOP_ARTISTS_SUCCESS:
			return {
				...state,
				artists: action.payload.items,
			};

		case GET_NEWALBUMS_SUCCESS:
			return {
				...state,
				albums: action.payload.albums.items,
			};

		case GET_FEATUREDPLAYLISTS_SUCCESS:
			return {
				...state,
				playlists: action.payload.playlists.items,
			};

		case GET_RECENTLY_PLAYED_ERROR:
			return {
				...state,
				playlist: action.payload,
			};
		case GET_TOP_ARTISTS_ERROR:
			return {
				...state,
				artists: action.payload,
			};

		case GET_NEWALBUMS_ERROR:
			return {
				...state,
				albums: action.payload,
			};

		case GET_FEATUREDPLAYLISTS_ERROR:
			return {
				...state,
				playlists: action.payload,
			};

		default:
			return state;
	}
};
