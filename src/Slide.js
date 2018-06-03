import React, { Component } from 'react';
import firebase from "firebase";
import ReactDOM from 'react-dom';
import Control from './Control';

import firebaseInit from './fireinit'
var key;
class Slide extends Component {
  componentDidMount() {
    document.getElementById('videocontent').style.display = "none";

    var name = "angelhack";
    console.log("name:"+name);
    var ref =firebase.database().ref().child("angelhack");
    ref.push({
      name:name,
      scanned : true,
      page:0,
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

  
  fileSelected(event) {
    console.log('file selected')
    var uploader = document.getElementById('uploader');
    var file = event.target.files[0];
    var storageRef = firebase.storage().ref().child('image');
    var uploadTask = storageRef.put(file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function (snapshot) {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function (error) {
      // Handle unsuccessful uploads
      console.log("error in uploading")
      ReactDOM.render(<Control />, document.getElementById('root'));
    }, function () {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);
        ReactDOM.render(<Control />, document.getElementById('root'));
      });
    });
  }

 
  render() {
    return (
      <div className="App">
        <p> You are on slide share now.... uuuhhhuuuu</p>
        <input id="uploadBtn" type="file" className="upload" onChange={this.fileSelected.bind(this)} />
        {/* accept="application/vnd.openxmlformats-officedocument.presentationml.presentation"  */}
        <progress id="uploader" value="0" max="100">0%</progress>


      </div>
    );
  }
}

export default Slide;
