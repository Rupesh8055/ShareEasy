import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import firebase from "firebase"
import firebaseInit from './fireinit'
import Projector from './Projector'

var key;

class QR extends Component {

    state = {
        url : "https://zxing.org/w/chart?cht=qr&chs=350x350&chld=L&choe=UTF-8&chl=angelhack"
       }
    componentDidMount() {
        console.log("u r in");
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
        ReactDOM.render(<Projector imgno={ newPost.page } className="control" />, document.getElementById('root'));
        
      }
    }else {
      console.log("Fist call to db");
    }
    
  });
    
  console.log("Entered data");
 
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to <strong>AngelHack</strong>
                    </h1>
                </header>
                <div id="box">
                <p> in QR Page</p>
                <img src={this.state.url} alt="bohoo" className="img-responsive" />
                </div>
            </div>
        );
    }
}
 
export default QR;
