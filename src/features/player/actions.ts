import SpotifyWebApi from 'spotify-web-api-js';
import { setAccessToken } from '../../utils/spotify_auth';
import { SET_TRACK_SUCCESS, SET_TRACK_ERROR } from './types';

const spotifyApi = new SpotifyWebApi();

export const playTrack = (id: string) => {
	return async (dispatch: any) => {
		try {
			await setAccessToken();

			spotifyApi.getTrack(id).then((r) => {
				dispatch({
					type: SET_TRACK_SUCCESS,
					item: [
						r.name,
						r.artists[0].name,
						r.album.images[0].url,
						r.preview_url,
					],
				});
			});
		} catch (error) {
			dispatch({ type: SET_TRACK_ERROR, payload: error });
			console.error(error);
		}
	};
};
