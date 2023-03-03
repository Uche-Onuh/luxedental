let firebaseConfig = {
 apiKey: "AIzaSyCAY0BzHaRQRT8AGYTciVHadsMCQx-BL_k",
  authDomain: "luxe-dental-9f613.firebaseapp.com",
  projectId: "luxe-dental-9f613",
  storageBucket: "luxe-dental-9f613.appspot.com",
  messagingSenderId: "1061529260851",
  appId: "1:1061529260851:web:cfe098388f4c0a3680a446",
  measurementId: "G-MWFXSYP7ZM",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
const analytics = getAnalytics();

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
firebase.analytics().logEvent('notification_received');

  