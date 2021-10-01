import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Head from './Head';
import Navbar from './Navbar';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './Home'),
  loading: () => <div>Loading...</div>
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ './about/About'),
  loading: () => <div>Loading...</div>
});

const App = () => {
  return(
  <div className="app">
    <Head />
    <Navbar />
    <main className="main">
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route path="/about" component={LoadableAbout} />
      </Switch>
    </main>
  </div>
)};

export default App;
