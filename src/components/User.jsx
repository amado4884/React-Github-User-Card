import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      user: { avatar, name, username, location, profile, followers, following, bio },
      main,
    } = this.props;
    return (
      <div className={`card${main ? " main" : ""}`}>
        <div className="info">
          <img src={avatar} alt="avatar" />
          <div className="card-info">
            <h3 className="name">{name}</h3>
            <p className="username">{username}</p>
            <p>Location: {location}</p>
            <p>
              Profile: <a href={profile}>{profile}</a>
            </p>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
            <p>Bio: {bio}</p>
          </div>
        </div>
        <div className={`badge${main ? " main" : " follower"}`}>{main ? "USER" : "FOLLOWER"}</div>
      </div>
    );
  }
}
