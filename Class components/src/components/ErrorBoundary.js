import { Component } from "react";

class ErrorBoundary extends Component {
  componentDidCatch(e) {
    console.log("caught", e);
  }
  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
