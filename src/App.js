import React from "react";

// ROUTES
import { Router } from "react-router-dom";
import Routes from './routes';

// TOAST
import { ToastContainer } from 'react-toastify';

// STYLES
import GlobalStyles from '../src/styles/global';

// SERVICES
import history from './services/history';

function App(){
  return(
    <>
      <GlobalStyles />
      <Router history={history}>
        <Routes/>
        <ToastContainer autoClose={3000}/>
      </Router>
    </>
  );
}

export default App;