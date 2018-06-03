import ReactDOM from 'react-dom';
import QR from "./QR.js";
import React, { Component } from 'react';


var viewer = function() {
    
    console.log("U clicked Viewer Mode");
    // pushToFirebase();
    // var link = "https://zxing.org/w/chart?cht=qr&chs=350x350&chld=L&choe=UTF-8&chl=angelhack";
    
//    window.location.assign(link);
   ReactDOM.render(<QR />, document.getElementById('root'));

}

export default viewer;