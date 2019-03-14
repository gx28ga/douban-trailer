import React, { Component } from "react";
import { render } from "react-dom";

import App from "./app";
class AppContainer extends Component {
  constructor() {
    super();
  }
  state = {
    name:"madoka!"
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({name:"i am madoka!"})
    },2000)
  }

  render() {
    return <App name={this.state.name}/>
  }
}

render(
  <AppContainer />, document.getElementById("app")
)