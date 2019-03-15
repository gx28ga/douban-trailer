import React, { Component } from "react";
import { render } from "react-dom";

import App from "./app";
class AppContainer extends Component {
  constructor() {
    super();
  }
  state = {
    name:"dio"
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({name:"jotaro"})
    },2000)
  }

  render() {
    return <App name={this.state.name}/>
  }
}

render(
  <AppContainer />, document.getElementById("app")
)