import React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6cAxmGqcx7FtmnhBfDMAnaICQPPYPyCI",
  authDomain: "chat-app-82425.firebaseapp.com",
  databaseURL: "https://chat-app-82425-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-app-82425",
  storageBucket: "chat-app-82425.appspot.com",
  messagingSenderId: "884720700368",
  appId: "1:884720700368:web:49272156480fbf2018c7d5",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
var i = 0;

class textInput extends React.Component{
    constructor() {
        super()
        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const today = new Date();
        if (today.getMinutes() < 10) {
            var time = today.getHours() + ":0" + today.getMinutes();
        } else { 
            var time = today.getHours() + ":" + today.getMinutes();
        }

        set(ref(database, "messages/" + i), {
            message: this.state.value,
            time: time
        });

        event.preventDefault();
        i++;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default textInput