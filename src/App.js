import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import FirstPage from "./FirstPage";
import './FirstPage.css';
import Main from './UI/Main';


//import Card from '@material-ui/core/Card';
//import CardContent from '@material-ui/core/CardContent';

const App = () => {
  return (
    
    <div className="Bg">
      <Main />
      <FirstPage />
    </div>
    
  );
};

export default App;