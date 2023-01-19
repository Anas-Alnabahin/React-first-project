import React, { Component } from "react";
import "./style.css";

export default class Profile extends Component {
  rawData = localStorage.getItem("user");
  data = JSON.parse(this.rawData);
  id = this.data._id;
  name = this.data.name;
  email = this.data.email;
  token = this.data.token;

  render() {
    return (
      <div>
        <ul className="profile-ul">
          <li>id: {this.id}</li>
          <li>name: {this.name}</li>
          <li>email: {this.email}</li>
        </ul>
        <h3 className="profileh3">Token: </h3>
        <p className="profilep">{this.token}</p>
      </div>
    );
  }
}
