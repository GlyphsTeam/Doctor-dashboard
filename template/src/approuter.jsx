import React, { createContext, useState } from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from 'config';
import { Provider } from 'react-redux';
import store from './store/index';

export const Appcontext = createContext();

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState("user");
  // const config = "/react/template/";
  return (
    <Router basename={`${config.publicPath}`}>
      <Provider store={store}>
      <Appcontext.Provider value={{ isAuth, setIsAuth }}>
        <Route render={(props) => <AppContainer {...props} />} />
      </Appcontext.Provider>
      </Provider>
    </Router>
  );
};

export default AppRouter;
