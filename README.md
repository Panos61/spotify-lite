### Spotify lite

- App is deployed with netlify.
- React (CRA) project written in TypeScript. The access_key is saved in Firebase DB. 
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

# Code documentation

At first, user is required to login. Basically, that means that he must be redirected to a page in which he/she must agree with the possible use of his/her content by third-party apps. 
``` typescript 
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
```

