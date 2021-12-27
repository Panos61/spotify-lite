import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './features/auth/reducer';
import { userPlaylists } from './features/user-playlists/reducer';

const store = configureStore({
	reducer: {
		authReducer,
		userPlaylists,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
