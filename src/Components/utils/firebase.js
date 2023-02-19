import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
	getAuth,
	GoogleAuthProvider,
	FacebookAuthProvider,
} from "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
	apiKey: "AIzaSyAja2oJuSzhsSa7yvuasHH4kHbakLTL8AU",
	authDomain: "video-951e8.firebaseapp.com",
	projectId: "video-951e8",
	storageBucket: "video-951e8.appspot.com",
	messagingSenderId: "400861790385",
	appId: "1:400861790385:web:67e765116328e8fd436290",
	measurementId: "G-8ZH1RZ4LEE",
};
if (firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth();
// export const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerFb = new FacebookAuthProvider();

export { auth, provider, providerFb };
