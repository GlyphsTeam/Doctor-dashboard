import React  from "react";
import AppRouter from "./AppRouters";
import { Provider } from 'react-redux';
import store from './store/index';



const App = () => {
    // const config = "/react/template/";
    return (
        <Provider store={store}>
          <AppRouter/>
        </Provider>
    );
  };
  
  export default App;
  