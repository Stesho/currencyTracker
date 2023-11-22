import React, { Component, ErrorInfo, ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      errorMessage: '',
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      errorMessage: error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error: ', error);
    console.error('ErrorInfo: ', errorInfo);
  }

  render() {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;

    return hasError ? (
      <div>
        <h2>Something go wrong</h2>
        <span>Error: ${errorMessage}</span>
      </div>
    ) : (
      children
    );
  }
}
