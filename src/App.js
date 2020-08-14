import React from 'react';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import AddGood from './AddGood/AddGood';
import Mall from './Mall/Mall';
import Order from './Order/Order'
import './App.css';

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
      <div className="navigation">
        <ul className="nav">
          <li>
          <Link to='/' className="link">商城</Link>
          </li>
          <li>
          <Link to='/order' className="link">订单</Link>
          </li>
          <li className="link">
            <Link to='/add-good' className="link">添加商品</Link>
          </li>
        </ul>
      </div>
        <Switch>
          <Route exact path='/' component={Mall}/>
          <Route exact path='/order' component={Order}/>
          <Route exact path='/add-good' component={AddGood}/>
        </Switch>
      </BrowserRouter>
  );
}
}

export default App;
