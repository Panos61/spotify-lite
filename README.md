### Spotify lite

- App is deployed with netlify.
- React (CRA) project written in TypeScript. The access_key is saved in Firebase DB. 
- React-Redux comes into use as the main state management tool.
- !! Due to the API limitations, only one user can login configuring his/her Spotify credentials.

# App use

- Can login/logout.
- Can view recent, top, recommended and more playlists.
- Can search for any track.
- Can play a preview of the track. (API limitations). 

# About Spotify Authorization

Through the Spotify Web API, external applications retrieve Spotify content such as album data and playlists. To access user-related data through the Web API, an application must be authorized by the user to access that particular information. We need to make use of the [scopes](https://developer.spotify.com/documentation/general/guides/authorization/scopes/) which provide Spotify users using third-party apps the confidence that only the information they choose to share will be shared. Below we can see an example of how scopes are used in this project:

``` typescript
const scopes: string[] = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
];
```
Also, Spotify provides us a Client ID key and a Client Secret key which can be found in Spotify dashboard after we init a new project. These two keys are important for the authorization flow to be done. Specifically, in this project the [Implicit Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.2) Authorization Flow is used. 

You can read a more detailed documentation about Spotify's Authorization flow [here](https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/).

# Code documentation

At first, user is required to login. Basically, that means that he must be redirected to a page in which he/she must agree with the possible use of his/her content by third-party apps. 
``` typescript 
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
```
By clicking the Agree button, Spotify API returns an uri which contains contains the access_key, type of token and expires_in values. We cut and take these values from the uri and we store them at Firebase DB. The access_key value is important in order to be authorized during every Spotify API call afterwards.

```typescript
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
```

```typescript
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
```
In order to be able to easily use the access key on every spotify call, the setAccessToken comes into use .
```typescript
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
```

##Let's say the user is now authenticated and authorized. What happens next? How do we get the Spotify data? How is the data properly managed for the whole time of the active user session?


