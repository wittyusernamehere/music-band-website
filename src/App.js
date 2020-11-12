import React from 'react';
import Title from './Title';
import Footer from './Footer';

import styles from './App.style.css';

import {Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Biography from './Biography';
import Contact from './Contact';
import Error from './Error';

const title="Band Name";

const App = () => {
    return (
        <>
         <div className={styles.container}>
            <Title title={title} />
            
            
            <Navbar/>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/biography" component={Biography} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
        </div>
  
            <Footer />
  
            {console.log(process.env.NODE_ENV)} 
        </>
    );
};

export default App;
