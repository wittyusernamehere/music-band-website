import React, { Suspense, lazy } from 'react';

import ErrorBoundary from './ErrorBoundary';
import Title from './Title';
import Footer from './Footer';

import styles from './App.style.css';

import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
const Home = lazy(() => import('./Home'));
const Biography = lazy(() => import('./Biography'));
const Contact = lazy(() => import('./Contact'));

const title = 'Band Name';

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <Title title={title} />

        <Navbar />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<>Loading</>}>
              <Route path="/" component={Home} exact />
              <Route path="/biography" component={Biography} />
              <Route path="/contact" component={Contact} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>

      <Footer />

      {console.log(process.env.NODE_ENV)}
    </>
  );
};

export default App;
