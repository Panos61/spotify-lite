import {
	GET_RECENTLY_PLAYED_SUCCESS,
	GET_RECENTLY_PLAYED_ERROR,
	GET_TOP_ARTISTS_SUCCESS,
	GET_TOP_ARTISTS_ERROR,
	GET_NEWALBUMS_SUCCESS,
	GET_NEWALBUMS_ERROR,
	GET_FEATUREDPLAYLISTS_SUCCESS,
	GET_FEATUREDPLAYLISTS_ERROR,
} from './types';
import SpotifyWebApi from 'spotify-web-api-js';
import { setAccessToken } from '../../utils/spotify_auth';

const spotifyApi = new SpotifyWebApi();

export const getRecentlyPlayed = () => {
	return async (dispatch: any) => {
		try {
			await setAccessToken();

			spotifyApi.getMyRecentlyPlayedTracks({ limit: 6 }).then((items) => {
				dispatch({
					type: GET_RECENTLY_PLAYED_SUCCESS,
					payload: items,
				});
			});
		} catch (error) {
			dispatch({ type: GET_RECENTLY_PLAYED_ERROR, payload: error });
		}
	};
};

export const getTopArtists = () => {
	return async (dispatch: any) => {
		try {
			await setAccessToken();

			spotifyApi.getMyTopArtists({ limit: 6 }).then((artists) => {
				dispatch({
					type: GET_TOP_ARTISTS_SUCCESS,
					payload: artists,
				});
			});
		} catch (error) {
			dispatch({ type: GET_TOP_ARTISTS_ERROR, payload: error });
		}
	};
};

export const getnewAlbums = () => {
	return async (dispatch: any) => {
		try {
			await setAccessToken();

			spotifyApi.getNewReleases({ limit: 6 }).then((albums) => {
				dispatch({
					type: GET_NEWALBUMS_SUCCESS,
					payload: albums,
				});
			});
		} catch (error) {
			dispatch({ type: GET_NEWALBUMS_ERROR, payload: error });
		}
	};
};

export const getFeaturedPlaylists = () => {
	return async (dispatch: any) => {
		try {
			await setAccessToken();

			spotifyApi.getFeaturedPlaylists({ limit: 6 }).then((playlist) => {
				dispatch({
					type: GET_FEATUREDPLAYLISTS_SUCCESS,
					payload: playlist,
				});
			});
		} catch (error) {
			dispatch({ type: GET_FEATUREDPLAYLISTS_ERROR, payload: error });
		}
	};
};
