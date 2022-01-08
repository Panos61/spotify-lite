import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './features/auth/reducer';
import { userPlaylists } from './features/user-playlists/reducer';
import { library } from './features/library/reducer';

const store = configureStore({
	reducer: {
		authReducer,
		userPlaylists,
		library,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
