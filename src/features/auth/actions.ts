import {
	AUTH_SUCCESS,
	AUTH_ERROR,
	SET_USER_SUCCESS,
	SET_USER_ERROR,
	LOGOUT_SUCCESS,
} from './types';
import { deleteToken, storeToken } from '../../utils/spotify_auth';
import SpotifyWebApi from 'spotify-web-api-js';
import {
	collection,
	DocumentData,
	getDocs,
	query,
	QuerySnapshot,
	where,
} from 'firebase/firestore/lite';
import { db } from '../../firebase';

const spotifyApi = new SpotifyWebApi();

export const setAuth = () => {
	return (dispatch: any) => {
		try {
			storeToken();
			dispatch({ AUTH_SUCCESS });
		} catch (error) {
			dispatch({ type: AUTH_ERROR, payload: JSON.stringify(error) });
		}
	};
};

export const setMe = () => {
	return async (dispatch: any) => {
		try {
			const usersCollectionRef = collection(db, 'user');

			const stateQuery = query(
				usersCollectionRef,
				where('access_key', '==', true)
			);

			if (stateQuery) {
				let _token: QuerySnapshot<DocumentData> = await getDocs(
					usersCollectionRef
				);

				if (_token !== null || _token !== '') {
					_token.forEach((doc) => {
						console.log(doc.data().access_key);
						spotifyApi.setAccessToken(doc.data().access_key);
					});

					spotifyApi.getMe().then((user) => {
						dispatch({ type: SET_USER_SUCCESS, payload: user });
						console.log(user);
					});
				} else {
					dispatch({
						type: SET_USER_ERROR,
						payload: 'No access token provided!',
					});
				}
			}
		} catch (error) {
			dispatch({ type: SET_USER_ERROR });
		}
	};
};

export const logout = () => {
	return async (dispatch: any) => {
		try {
			await deleteToken();
			dispatch({ type: LOGOUT_SUCCESS });
		} catch (error) {
			console.error(error);
		}
	};
};
