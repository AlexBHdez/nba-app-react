import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB4XooqZJ-b8W2U9xWy6USNckF6H-kzqTs",
  authDomain: "nba-app-alexbhdez.firebaseapp.com",
  databaseURL: "https://nba-app-alexbhdez.firebaseio.com",
  projectId: "nba-app-alexbhdez",
  storageBucket: "nba-app-alexbhdez.appspot.com",
  messagingSenderId: "825764587831"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    })
  })
  return data;
}

export {
  firebase,
  firebaseDB,
  firebaseLooper,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
}
