import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

/**
 * Firebase configuration
 * @type {Object}
 * @property {string} apiKey - API key
 * @property {string} authDomain - Auth domain
 * @property {string} projectId - Project ID
 * @property {string} messagingSenderId - Messaging sender ID
 * @property {string} appId - App ID
 */

const firebaseConfig = {
  apiKey: "AIzaSyCMSZBkiIKNsZuySGymCegqZ2il3tCOaDQ",
  authDomain: "test-zerostic.firebaseapp.com",
  databaseURL: "https://test-zerostic-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "test-zerostic",
  messagingSenderId: "710223822302",
  appId: "1:710223822302:web:f4650aa40ba254b545714f",
  measurementId: "G-4S1LS6YZFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
