// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut,
    onAuthStateChanged, 
    } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4qmF10VxKP3sqxyKvndBuMihENAqrwVo",
    authDomain: "cravecraft-admin.firebaseapp.com",
    projectId: "cravecraft-admin",
    storageBucket: "cravecraft-admin.appspot.com",
    messagingSenderId: "1018673597965",
    appId: "1:1018673597965:web:4021924764efe0dac7cf44"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const adminEmails = ["leo.escaroz@gmail.com", "hummingbirdcreative@gmail.com", "hannahnbethke@gmail.com"];

// Initialize provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 
    prompt: 'select_account',
    hd: "leo.escaroz@gmail.com",
});

// Initialize a reference to our auth object
// TODO: Why do we pass a ref to app? Const auth = getAuth(app);
const auth = getAuth();

const login = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        if(!adminEmails.includes(result.user.email)) {
            alert("Sorry, this is restricted to certain users only")
            auth.signOut();
        };
        // console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
}



function logout() {
    return signOut(auth);
}

export { 
    auth, 
    login, 
    logout,
    onAuthStateChanged,
};