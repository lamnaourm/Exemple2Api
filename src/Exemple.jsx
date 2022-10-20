import React, { Component } from "react";
import axios from "axios";

class Exemple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      user: {},
    };
  }
  render() {
    console.log(this.state.user);
    return (
      <div>
        <input
          type="number"
          value={this.state.userId}
          onChange={(e) => this.setState({ userId: e.target.value })}
        />
        <br />
        {this.state.user.id ? (
          <div>
            <h1>
              {this.state.user.name} - {this.state.user.address.city}
            </h1>
          </div>
        ) : undefined}
      </div>
    );
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.userId !== this.state.userId) {
      const getData = async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.state.userId}`
        );
        return res.data;
      };
      getData().then((user) => this.setState({ user }));
    }
  }
}

export default Exemple;
