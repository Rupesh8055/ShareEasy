
import firebase from "firebase";


//   // Initialize Firebase
  var key;
//   var config = {
//     apiKey: "AIzaSyDATA2bq-F8Ke_ukPoTrR08CoezjgLhePk",
//     authDomain: "webtv-b6d6f.firebaseapp.com",
//     databaseURL: "https://webtv-b6d6f.firebaseio.com",
//     projectId: "webtv-b6d6f",
//     storageBucket: "webtv-b6d6f.appspot.com",
//     messagingSenderId: "684026666840"
//   };
//   firebase.initializeApp(config);

  var pushToFirebase = function() {
    // var name = document.getElementById("name").value;
    var name = "angelhack";
    console.log("name:"+name);
    var ref =firebase.database().ref().child("angelhack");
    ref.push({
      name:name,
    }).then((snap) => {
       key = snap.key;
       console.log("key"+key);
   });

   ref.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val();
    if(prevChildKey != null) {
      console.log("Previous Post ID: " + prevChildKey);
    }else {
      console.log("Fist call to db");
    }
    
  });
    
  console.log("Entered data");
 
  }

  export default pushToFirebase;