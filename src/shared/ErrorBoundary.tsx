import React, { Component, ReactNode } from "react"; 

interface Props {
    fallback: ReactNode; //lo que llega con el error
    children: ReactNode; //lo que se renderiza normalmente
}

export class ErrorBoundary extends Component<Props> {

    state: { hasError: boolean } = { hasError: false };

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: React.ErrorInfo) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error:Error, errorInfo :React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}