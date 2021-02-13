import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './componentes/Menu';
import Home from './componentes/Home';
import Info from './componentes/Info';
import App from './componentes/App';
import Contacto from './componentes/Contacto';
import PageNotFound from './componentes/PageNotFound';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter ,Route,Switch} from "react-router-dom";


document.getElementById('root').className+="root";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info}/>
        <Route exact path="/Card" component={App}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
