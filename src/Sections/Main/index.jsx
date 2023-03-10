import React, { Component } from "react";
import "./style.css";

import profilePic from "../../assets/jenny.png";
import Slider from "../Slider";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default class Main extends Component {
  rawData = localStorage.getItem("user");
  data = JSON.parse(this.rawData);
  isAdmin = this.data.isAdmin;

  logOuthandle = () => {
    localStorage.clear();
  };

  render() {
    console.log(this.isAdmin);
    return (
      <div className="main-div">
        <Link to={"profile"}>
          <button
            style={{
              marginLeft: "50px",
              padding: "10px",
              marginTop: "30px",
              width: "200px",
              height: "50px",
              fontSize: "30px",
            }}
          >
            Profile
          </button>
        </Link>
        <Link to={"../Login"}>
          <button
            onClick={this.logOuthandle}
            style={{
              marginLeft: "50px",
              padding: "10px",
              marginTop: "30px",
              width: "200px",
              height: "50px",
              fontSize: "30px",
            }}
          >
            logout
          </button>
        </Link>
        {this.isAdmin ? (
          <Link to={"users"}>
            <button
              style={{
                marginLeft: "50px",
                padding: "10px",
                marginTop: "30px",
                width: "200px",
                height: "50px",
                fontSize: "30px",
              }}
            >
              Show Users
            </button>
          </Link>
        ) : (
          ""
        )}
        <div className="welcome-div">
          <p>Welcome back, Jenny!</p>
          <img src={profilePic} alt="" />
        </div>
        <h4>NEW GAMES </h4>
        <Slider />
        <Footer />
      </div>
    );
  }
}
