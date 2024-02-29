import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/**
 * Firebase configuration
 * @type {Object}
 * @property {string} apiKey - API key
 * @property {string} authDomain - Auth domain
 * @property {string} projectId - Project ID
 * @property {string} storageBucket - Storage bucket
 * @property {string} messagingSenderId - Messaging sender ID
 * @property {string} appId - App ID
 * @property {string} measurementId - Measurement ID
 */

const firebaseConfig = {
  apiKey: "AIzaSyCMSZBkiIKNsZuySGymCegqZ2il3tCOaDQ",
  authDomain: "test-zerostic.firebaseapp.com",
  projectId: "test-zerostic",
  storageBucket: "test-zerostic.appspot.com",
  messagingSenderId: "710223822302",
  appId: "1:710223822302:web:f4650aa40ba254b545714f",
  measurementId: "G-4S1LS6YZFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
