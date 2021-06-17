import { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'react-bootstrap';

import Home from './component';

function App() {
  //   useEffect(() => {
  //     const script  = document.createElement('script');

  //     script.src = "js/scripts.js";
  //     script.async = true;

  //     document.body.appendChild(script);

  //     return () => {
  //       document.body.removeChild(script);
  //     }
  //   })

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
