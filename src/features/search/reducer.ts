import { SEARCH_SUCCESS, SEARCH_ERROR } from './types';
import { AnyAction } from 'redux';

export const initialState = {
	tracks: [] as any[],
};

export const searchReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case SEARCH_SUCCESS:
			return {
				...state,
				tracks: action.payload.tracks.items,
			};

		case SEARCH_ERROR:
			return {
				...state,
				tracks: null,
			};
		default:
			return state;
	}
};
