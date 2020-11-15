import React, { Component } from 'react';
import styles from './ErrorBoundary.styles.css';

import ErrorImg from './assets/images/error.png';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasErrored: false };
  }

  static getDerivedStateFromError(error) {
    //process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className={styles.error}>
          <img className={styles.img} src={ErrorImg} alt="Image" />
          <div>Sorry this page is broken.</div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
