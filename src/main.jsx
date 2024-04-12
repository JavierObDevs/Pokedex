import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PokemonProvider } from "./context/PokemonContext.jsx";
import { HashRouter} from "react-router-dom";
import store from "./store/index.js";
import {Provider} from 'react-redux'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonProvider >
        <HashRouter>
          <App />
        </HashRouter>
      </PokemonProvider>
    </Provider>
  </React.StrictMode>
);
