import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from "./store";
//import history from "./services/history";
import GlobalStyle from "./styles/GlobalStyles";
import Header  from "./components/Header";
import Rotas from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Rotas />
        <GlobalStyle />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;
