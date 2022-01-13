import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './features/auth/reducer';
import { userPlaylists } from './features/user-playlists/reducer';
import { library } from './features/library/reducer';
import { playerReducer } from './features/player/reducer';
import { searchReducer } from './features/search/reducer';

const store = configureStore({
	reducer: {
		authReducer,
		userPlaylists,
		library,
		playerReducer,
		searchReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
