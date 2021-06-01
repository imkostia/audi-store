import React from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends React.Component {
  state = {
    isError: false,
  };
  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    if (this.isError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
