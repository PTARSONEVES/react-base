import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
//import { ToastContainer } from 'react-toastify';

//import history from "./services/history";
import GlobalStyle from "./styles/GlobalStyles";
import Header  from "./components/Header";
import Rotas from "./routes";

function App() {
  return (
    <Router>
      <Header />
      <Rotas />
      <GlobalStyle />
    </Router>
  );
}

export default App;
