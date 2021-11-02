let firebaseConfig = {
  apiKey: "AIzaSyDOW7OG2O9-6Pgs_79VqGVSJPq3oITL6Es",
  authDomain: "luxe-dental-f2df2.firebaseapp.com",
  projectId: "luxe-dental-f2df2",
  storageBucket: "luxe-dental-f2df2.appspot.com",
  messagingSenderId: "792390556619",
  appId: "1:792390556619:web:a152b1a406175327ba744e",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

  