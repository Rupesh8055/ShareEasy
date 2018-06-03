import firebase from "firebase"

var isInit = false;

var firebaseInit = function() {
    var config = {
        apiKey: "AIzaSyDATA2bq-F8Ke_ukPoTrR08CoezjgLhePk",
        authDomain: "webtv-b6d6f.firebaseapp.com",
        databaseURL: "https://webtv-b6d6f.firebaseio.com",
        projectId: "webtv-b6d6f",
        storageBucket: "webtv-b6d6f.appspot.com",
        messagingSenderId: "684026666840"
      };
      firebase.initializeApp(config);
    
}

if(!isInit){
    firebaseInit();
}

export default firebaseInit;