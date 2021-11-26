import React from "react";
import Popup from "./popup";
import ReactDOM  from "react-dom";
import logo from "../logo.png"

class Login extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            searchField : [],
            trig : false,
        };
        this.passcheck = this.passcheck.bind(this);
    }
    passcheck(){
        var pass = this.state.searchField.length 
        if (pass>8){
            console.log("approved");
            this.setState({ trig: true })
        }
    }
    render()
     {
      return (
      <div className="container text-center"
      style={{
        position: "absolute",
        top: "30%",
        left: "10%",
        width: "100%",
        textAlign: "center",
    }}
      >
        <h1 className="text-3xl bold px-5 py-10 text-red-400">Login Form</h1>
      <div>
      <input 
      className="text-2xl text-red-600 bold border-b px-4 py-4"
      type="Username"
      placeholder="Username"
      
      ></input>
      </div>
      <div><input
      className="text-2xl text-red-600 bold border-b px-4 py-5"
      type="text"
      placeholder="password"
      onChange= {e => {
        this.setState({searchField: e.target.value})
    }}
      ></input>
      <br></br>
      <button
      className="text-2xl bg-blue-300 hover:bg-green-300 my-5 px-4 py-4 rounded"
      onClick= {this.passcheck}
      >Submit</button>
      <br></br>
      <Popup trigger={this.state.trig}>
        </Popup>
      </div>
      </div>
      )}
  }


export default Login;
