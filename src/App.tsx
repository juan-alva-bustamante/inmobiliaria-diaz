import React from 'react';

import './App.module.scss';
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import About from './views/About/About';

function App() {
  return (
    <HashRouter>
      <div className="w-full h-full absolute">
        {/* This is an example component */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
        <Switch>
          <Route path={`/about`}>
            <About />
          </Route>
          <Route path={`/`}>
            <Home />
          </Route>
        </Switch>
        <div className="relative right-12 bottom-12">
          <button>Icono</button>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
