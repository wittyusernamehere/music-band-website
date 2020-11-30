import React, { Suspense, lazy } from 'react';

import Spinner from './Spinner';
import ErrorBoundary from './ErrorBoundary';
import Title from './Title';
import Footer from './Footer';

import styles from './App.style.css';

import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

const Home = lazy(() => import('./Home'));
const Biography = lazy(() => import('./Biography'));
const Contact = lazy(() => import('./Contact'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const title = 'Band Name';

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <Title title={title} />

        <Navbar />

        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/biography" component={Biography} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>

      <Footer />

      {console.log(process.env.NODE_ENV)}
    </>
  );
};

export default App;
