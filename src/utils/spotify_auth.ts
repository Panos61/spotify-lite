import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	DocumentData,
	getDocs,
	query,
	QuerySnapshot,
	setDoc,
	where,
} from 'firebase/firestore/lite';
import SpotifyWebApi from 'spotify-web-api-js';
import { db } from '../firebase';

// We need the auth URL in order to get the access token.
export const authEndpoint: string = 'https://accounts.spotify.com/authorize';

//const redirectUri: string = 'http://localhost:3000';
const redirectUri: string = 'https://spotify-lite-app.netlify.app/';

const clientId: string = '7e388c936f1549c48057717be6380992';

// Scopes/Permissions
const scopes: string[] = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
];

// Get access_token part from the url.
export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial: string, item: string): string => {
			let parts: string[] = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);
			// Set token on localstorage.
			localStorage.setItem('access_token', initial);
			return initial as string;
		}, {} as string);
};

// Export the complete url link to get the token.
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;

// Store token in firebase
export const storeToken = async () => {
	try {
		// Get token from the url and hash it.
		const hash: string | any = getTokenFromUrl();

		// If hash is not empty or undefined..
		if (hash !== '' || hash !== undefined) {
			let _token: string = hash.access_token;

			// Set an 'access_key' document into user collection
			await setDoc(doc(db, 'user', 'access_key'), {
				access_key: _token,
			});

			// Leave url as empty string
			window.location.hash = '';
		}
	} catch (error) {
		console.error(error);
	}
};

// Spotify object
const spotifyApi = new SpotifyWebApi();

// Set access token
export const setAccessToken = async () => {
	try {
		const usersCollectionRef = collection(db, 'user');

		const stateQuery = query(
			usersCollectionRef,
			where('access_key', '==', false)
		);

		if (stateQuery) {
			let _token: any = await getDocs(usersCollectionRef);

			if (_token !== null || _token !== '') {
				_token.forEach((doc) => {
					spotifyApi.setAccessToken(doc.data().access_key);
				});
			}
		}
	} catch (error) {
		console.error(error);
	}
};

export const deleteToken = async () => {
	const usersCollectionRef = collection(db, 'user');
	let document: any = await getDocs(usersCollectionRef);

	document.forEach((doc) => {
		console.log(doc.data());
	});

	try {
		await deleteDoc(doc(db, 'user', 'access_key'));
	} catch (error) {
		console.log(error);
	}
};
