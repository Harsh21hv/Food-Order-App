import React from "react";

class User extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Harsh21hv");

    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="About">
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default User;
