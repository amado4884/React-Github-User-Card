import React, { Component } from "react";
import axios from "axios";

import User from "../components/User";

export default class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "amado4884",
      user: {},
      followersUsernames: ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"],
      followers: [],
    };
  }

  parseResponse = (data) => {
    const {
      avatar_url: avatar,
      name,
      login: username,
      location,
      html_url: profile,
      followers,
      following,
      bio,
      followers_url,
    } = data;
    return { avatar, name, username, location, profile, followers, following, bio, followers_url };
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((response) => {
        const user = this.parseResponse(response.data);
        this.setState({ ...this.state, user });
        let followersUsernames = [...this.state.followersUsernames];
        if (user.followers !== 0) {
          axios
            .get(user.followers_url)
            .then((res) => {
              followersUsernames = res.data.map((follower) => follower.login);
              followersUsernames.forEach((follower) => {
                axios
                  .get(`https://api.github.com/users/${follower}`)
                  .then((res) => {
                    this.setState({
                      ...this.state,
                      followers: [...this.state.followers, this.parseResponse(res.data)],
                    });
                  })
                  .catch((err) => console.log("error getting followers", err));
              });
            })
            .catch((err) => console.log("error getting followers_url", err));
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  render() {
    return (
      <div className="cards">
        {this.state.user && <User user={this.state.user} main={true} />}
        {this.state.followers && this.state.followers.map((follower, i) => <User key={i} user={follower} />)}
      </div>
    );
  }
}
