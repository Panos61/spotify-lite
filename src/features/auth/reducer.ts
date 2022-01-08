import {
	AUTH_SUCCESS,
	AUTH_ERROR,
	SET_USER_SUCCESS,
	SET_USER_ERROR,
	LOGOUT_SUCCESS,
} from './types';
import { User, AuthState } from '../../utils/interfaces';
import { AnyAction } from 'redux';

export const initialState: AuthState | User = {
	user: null,
	isAuthenticated: false,
};

export const authReducer = (
	state: AuthState = initialState,
	action: AnyAction
) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
			};
		case AUTH_ERROR:
			return {
				...state,
				isAuthenticated: false,
			};
		case SET_USER_SUCCESS:
		case LOGOUT_SUCCESS:
			return {
				...state,
				user: action.payload,
				isAuthenticated: false,
			};
		case SET_USER_ERROR:
			return {
				...state,
				user: null,
				isAuthenticated: false,
			};

		default:
			return state;
	}
};

export default authReducer;
