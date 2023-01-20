import axios from "axios";
import React, { Component } from "react";
import "./style.css";

export default class Users extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const getReq = axios
        .get("https://react-tt-api.onrender.com/api/users", {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((res) => {
          this.setState({ users: res.data });
          console.log(this.state.users);
        });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="users-div">
        {this.state.users.map((item) => {
          return (
            <ul className="users-ul">
              <li>Name: {item.name}</li>
              <li>Email: {item.email}</li>
              <li>Role: {item.isAdmin ? "Admin" : "Reguler User"}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}
