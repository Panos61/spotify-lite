export interface User {
	id: string | number;
	display_name: string;
	country: string;
	images: [];
	followers: string;
}

export interface AuthState {
	isAuthenticated: boolean;
	user: User | null;
}

export interface recentlyPlaylist {
	artists: {
		external_urls: {
			spotify: string;
			href: string;
			id: string;
			name: string;
			uri: string;
		};
	};
	id: string;
	href: string;
	name: string;
	uri: string;
	preview_url: string;
}
