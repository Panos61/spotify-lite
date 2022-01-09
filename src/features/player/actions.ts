import SpotifyWebApi from 'spotify-web-api-js';
import { setAccessToken } from '../../utils/spotify_auth';
import {
	PLAY_TRACK_SUCCESS,
	PLAY_TRACK_ERROR,
	SET_TRACK_SUCCESS,
} from './types';

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
				console.log(r.name);
			});
		} catch (error) {
			dispatch({ type: PLAY_TRACK_ERROR, payload: error });
			console.error(error);
		}
	};
};
