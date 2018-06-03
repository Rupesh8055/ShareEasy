import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserQRCodeReader, VideoInputDevice } from '@zxing/library';
import Slide from './Slide.js'
import ReactDOM from 'react-dom';

const codeReader = new BrowserQRCodeReader()
class Scan extends Component {

	
    componentDidMount() {
        console.log("u r in");
        document.getElementById('videocontent').style.display = "block";

       
				console.log('ZXing code reader initialized')
				codeReader.getVideoInputDevices()
					.then((videoInputDevices) => {
						const sourceSelect = document.getElementById('sourceSelect')
						const firstDeviceId = videoInputDevices[0].deviceId
						if (videoInputDevices.length > 1) {
							videoInputDevices.forEach((element) => {
								const sourceOption = document.createElement('option')
								sourceOption.text = element.label
								sourceOption.value = element.deviceId
								sourceSelect.appendChild(sourceOption)
							})
							const sourceSelectPanel = document.getElementById('sourceSelectPanel')
							sourceSelectPanel.style.display = 'block'
						}
						
							codeReader.decodeFromInputVideoDevice(firstDeviceId, 'video').then((result) => {
								console.log(result)
                                document.getElementById('result').textContent = result.text
                                this.gotoSlide
							}).catch((err) => {
								console.error(err)
								document.getElementById('result').textContent = err
							})
							console.log(`Started continous decode from camera with id ${firstDeviceId}`)
						
						document.getElementById('resetButton').addEventListener('click', () => {
							codeReader.reset()
							console.log('Reset.')
						})
					})
					.catch((err) => {
						console.error(err)
					})
    }

	gotoSlide() {
		ReactDOM.render(<Slide />, document.getElementById('root'));
		codeReader.reset()
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
					<button onClick={this.gotoSlide} >ByPass</button>
                </div>
            </div>
        );
    }
}
 
export default Scan;
