import { SEARCH_SUCCESS, SEARCH_ERROR } from './types';
import SpotifyWebApi from 'spotify-web-api-js';
import { setAccessToken } from '../../utils/spotify_auth';

const spotifyApi = new SpotifyWebApi();

export const search = (track: string) => {
	return async (dispatch: any) => {
		await setAccessToken();

		try {
			spotifyApi.searchTracks(track, { limit: 5 }).then((data) => {
				dispatch({ type: SEARCH_SUCCESS, payload: data });
				console.log('Search ->', data);
			});
		} catch (error) {
			dispatch({ type: SEARCH_ERROR, payload: error });
		}
	};
};
//tracks: [data.tracks.items]
