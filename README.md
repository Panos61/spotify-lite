### Spotify lite

- App is deployed with netlify.
- React (CRA) project written in TypeScript. The access_key is saved in Firebase DB. 
- !! Due to the API limitations, only one user can login configuring his/her spotify credentials.

# App use

- Can login/logout.
- Can view recent, top, recommended and more playlists.
- Can search for any track.
- Can play a preview of the track. (API limitations). 

# Code ducumentation

Through the Spotify Web API, external applications retrieve Spotify content such as album data and playlists. To access user-related data through the Web API, an application must be authorized by the user to access that particular information. We need to make use of the [scopes](https://developer.spotify.com/documentation/general/guides/authorization/scopes/)which provide Spotify users using third-party apps the confidence that only the information they choose to share will be shared. Below we can see an example of how scopes are used in this project:

``` typescript
const scopes: string[] = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
];
```

