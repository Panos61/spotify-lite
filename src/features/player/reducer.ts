import {
	SET_TRACK_SUCCESS,
	SET_TRACK_ERROR,
	PLAY_TRACK_SUCCESS,
	PLAY_TRACK_ERROR,
} from './types';
import { AnyAction } from 'redux';

export const initialState = {
	item: [] as any,
};

export const playerReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case SET_TRACK_SUCCESS:
			return {
				...state,
				item: action.item,
			};

		case SET_TRACK_ERROR:
			return {
				...state,
				item: null,
			};
		default:
			return state;
	}
};
