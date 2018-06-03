import React, { Component } from 'react';
import './App.css';
import firebase from "firebase";
import firebaseInit from './fireinit'
  // Initialize Firebase
  var key;
  var pageurl;
var urls = ['https://firebasestorage.googleapis.com/v0/b/webtv-b6d6f.appspot.com/o/img%2F0.jpg?alt=media&token=ff11873c-12d0-4be6-953e-8032feb7ab9d',
             'https://firebasestorage.googleapis.com/v0/b/webtv-b6d6f.appspot.com/o/img%2F1.jpg?alt=media&token=9518b8ef-cd7f-44c4-8194-a646baf4463d',
            'https://firebasestorage.googleapis.com/v0/b/webtv-b6d6f.appspot.com/o/img%2F2.jpg?alt=media&token=af294e05-9ce7-4fd8-979f-ab8448aa2d7f',
          'https://firebasestorage.googleapis.com/v0/b/webtv-b6d6f.appspot.com/o/img%2F3.jpg?alt=media&token=06234eab-864a-48bd-a004-d5921eb61ae9'
         ]
class Window extends Component {
    
  
    
  componentDidMount() {
    document.getElementById('videocontent').style.display = "none";
    var storage = firebase.storage();
    // Create a reference to the file we want to download
var starsRef = storage.ref('img/'+this.props.imgno+'.jpg');

// Get the download URL
starsRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
  console.log("url is "+url)
  pageurl = url

  // this.setState({ imgurl : url })
}).catch(function(error) {
        console.log("error in getting image");
        console.error(error)
  });
  }
  render() {
    return (
        <img  src= {urls[this.props.imgno]} alt = {"bohoo"} className="windowimg" />
    )       
  }
}

export default Window;
