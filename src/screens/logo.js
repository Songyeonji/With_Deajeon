import React, { Component } from "react";
import { Image } from "react-native";
import Logo from "./icon/daejeonlogo.png";

class LogoTitle extends Component {
  render() {
    return <Image style={{ width: 80, height: 40 }} source={Logo} />;
  }
}

export default LogoTitle;
