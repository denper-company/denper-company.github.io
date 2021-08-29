import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  _retry = () => {
    this.setState({ error: null });
  };

  render() {
    const { children, fallback } = this.props;
    const { error } = this.state;
    if (error) {
      if (typeof fallback === "function") {
        return fallback(error, this._retry);
      }
      return fallback;
    }
    return children;
  }
}
