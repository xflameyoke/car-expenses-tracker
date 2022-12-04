import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBwI0ckTSG7f8x3Rf2omwl87JGB0ey155Y',
  authDomain: 'car-expenses-tracker-app.firebaseapp.com',
  projectId: 'car-expenses-tracker-app',
  storageBucket: 'car-expenses-tracker-app.appspot.com',
  messagingSenderId: '1090587330885',
  appId: '1:1090587330885:web:a451bc3f2a5b0b0162562c',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;

      localStorage.setItem('name', name as string);
    })
    .catch((error) => {
      alert(error);
    });
};
