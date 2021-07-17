import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDy4ThKfrJFaZbapp5VPeMxcYZo1Z7g91c',
	authDomain: 'whatsapp-clone-cc912.firebaseapp.com',
	projectId: 'whatsapp-clone-cc912',
	storageBucket: 'whatsapp-clone-cc912.appspot.com',
	messagingSenderId: '168165478104',
	appId: '1:168165478104:web:c6fb3d8d4899e77f6c51ad',
	measurementId: 'G-JN0VMSG6WD',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
