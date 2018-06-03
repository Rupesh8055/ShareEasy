import Scan from './Scan.js'
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

var uploader = function() {
    console.log("U clicked Upload");
    // get image
    ReactDOM.render(<Scan />, document.getElementById('root'));
}

export default uploader;