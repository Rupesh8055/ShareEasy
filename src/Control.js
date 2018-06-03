import React, { Component } from 'react';
import './App.css';
import Window from './Window.js'
import firebase from "firebase"
import firebaseInit from './fireinit'

var upper,lower;
var key;
class Control extends Component {
  constructor(props){
    super(props);
    this.state = {
        up : 0,
        down : 1
    }

  }

  componentDidMount() {
    document.getElementById('videocontent').style.display = "none";
    upper = this.state.up
    lower = this.state.down
  }
  upperclicked = () => {
    console.log("upper clicked")
    if(upper > 0){
      console.log("Upper: "+upper)
      upper--;  var name = "angelhack";
      console.log("name:"+name);
      var ref =firebase.database().ref().child("angelhack");
      ref.push({
        name:name,
        scanned : true,
        page :upper,
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
          console.log("page:"+newPost.page)
        }
      }else {
        console.log("Fist call to db");
      }
      
    });
      
    console.log("Entered data");
   
    }
  }
  lowerclicked = () => {
    console.log("bottom clicked")
    if(lower < 3) {
      console.log("Lower "+ lower)
      lower++;
      var name = "angelhack";
      console.log("name:"+name);
      var ref =firebase.database().ref().child("angelhack");
      ref.push({
        name:name,
        scanned : true,
        page :lower,
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
          console.log("page:"+newPost.page)
        }
      }else {
        console.log("Fist call to db");
      }
      
    });
      
    console.log("Entered data");
   
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.upperclicked}><Window imgno={ this.state.up } className="control" /></button>
        <button onClick={this.lowerclicked}><Window imgno={this.state.down} className="control"  /></button>
      </div>
    );
  }
}

export default Control;
