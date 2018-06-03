import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import firebase from "firebase";
import firebaseInit from './fireinit'
import Projector1 from './Projects1.js'
  // Initialize Firebase
  var key;
  var pageurl;
var urls = ['https://firebasestorage.googleapis.com/v0/b/webtv-b6d6f.appspot.com/o/img%2F0.jpg?alt=media&token=ff11873c-12d0-4be6-953e-8032feb7ab9d',
             'https://firebasestorage.googleapis.com/v0/b/webtv-b6d6f.appspot.com/o/img%2F1.jpg?alt=media&token=9518b8ef-cd7f-44c4-8194-a646baf4463d',
            'https://firebasestorage.googleapis.com/v0/b/webtv-b6d6f.appspot.com/o/img%2F2.jpg?alt=media&token=af294e05-9ce7-4fd8-979f-ab8448aa2d7f',
          'https://firebasestorage.googleapis.com/v0/b/webtv-b6d6f.appspot.com/o/img%2F3.jpg?alt=media&token=06234eab-864a-48bd-a004-d5921eb61ae9'
         ]
class Projector extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            imgurl : this.props.imgno
        }
    }
  componentDidMount() {
    document.getElementById('videocontent').style.display = "none";
    var name = "angelhack";
    console.log("name:"+name);
    var ref =firebase.database().ref().child("angelhack");
    ref.push({
      name:name,
      scanned : false,
      page :0,
    }).then((snap) => {
       key = snap.key;
       console.log("key"+key);
   });

   ref.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val();
    if(prevChildKey != null) {
      console.log("Previous Post ID: " + prevChildKey);
      console.log("newPost:"+newPost.scanned)
      if (newPost.scanned == true) {
          //true
          ReactDOM.render(<Projector1 imgno={ newPost.page } className="control" />, document.getElementById('root'));
        
      }
    }else {
      console.log("Fist call to db");
    }
    
  });
    
  console.log("Entered data");
 
    
  }
  render() {
    return (
        <img  src= {urls[this.state.imgurl]} alt = {"bohoo"} className="projector" />
    )       
  }
}

export default Projector;
