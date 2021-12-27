import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: 'AIzaSyCQX8gFJvS6cm2bFj8uAnwbl3laWYCPSdY',
	authDomain: 'spotify-lite-a15bf.firebaseapp.com',
	databaseURL:
		'https://spotify-lite-a15bf-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'spotify-lite-a15bf',
	storageBucket: 'spotify-lite-a15bf.appspot.com',
	messagingSenderId: '82429616074',
	appId: '1:82429616074:web:5dd4243ac82db9300b7933',
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const db: Firestore = getFirestore(app);
