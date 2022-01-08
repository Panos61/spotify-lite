import {
	GET_SAVED_TRACKS_SUCCESS,
	GET_SAVED_TRACKS_ERROR,
	GET_SAVED_PLAYLISTS_SUCCESS,
	GET_SAVED_PLAYLISTS_ERROR,
} from './types';
import SpotifyWebApi from 'spotify-web-api-js';
import { setAccessToken } from '../../utils/spotify_auth';

const spotifyApi = new SpotifyWebApi();

export const getSavedTracks = () => {
	return async (dispatch: any) => {
		try {
			await setAccessToken();

			spotifyApi.getMySavedTracks().then((tracks) => {
				dispatch({ type: GET_SAVED_TRACKS_SUCCESS, payload: tracks });
				console.log('Tracks', tracks);
			});
		} catch (error) {
			dispatch({
				type: GET_SAVED_TRACKS_ERROR,
				payload: JSON.stringify(error),
			});
		}
	};
};

export const getSavedPlaylists = () => {
	return async (dispatch: any) => {
		try {
			await setAccessToken();

			spotifyApi.getMySavedAlbums({ limit: 3 }).then((playlists) => {
				dispatch({ type: GET_SAVED_PLAYLISTS_SUCCESS, payload: playlists });
				console.log('Playlists:', playlists);
			});
		} catch (error) {
			dispatch({
				type: GET_SAVED_PLAYLISTS_ERROR,
				payload: JSON.stringify(error),
			});
			console.error(error);
		}
	};
};
