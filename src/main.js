import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8zEd85qqI-ypnsG_7n_NGzYpoK9RPviA",
    authDomain: "umnclasses-42983.firebaseapp.com",
    projectId: "umnclasses-42983",
    storageBucket: "umnclasses-42983.appspot.com",
    messagingSenderId: "1052359780169",
    appId: "1:1052359780169:web:0219e890660f5ac5955c98",
    measurementId: "G-G2V2B27GCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)

createApp(App).use(router).mount('#app')
