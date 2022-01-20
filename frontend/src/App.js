import 'bootstrap/dist/css/bootstrap.min.css';
import './amazon_css/new.css';
import Header from './amazon/header';
import Home from './amazon/Home';
import Product from './amazon/product';
import 'react-notifications/lib/notifications.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Detail from './amazon/detail';
import Login from './amazon/User/login';
import Create from './amazon/User/create';
import Cart from './amazon/cart';
import Search from './amazon/search';
import Acc from './amazon/Account';
import Example from './amazon/checkOut/ex';


function App() {
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />

          </Route>
          <Route path="/loged" type="private">
            <Header />
            <Home />
          </Route>
          <Route path="/product">
            <Header />
            <Product />
          </Route>
          <Route path="/detail">
            <Header />
            <Detail />

          </Route>
          <Route path="/signup">
            <Login />
            {/* <Tester /> */}
          </Route>
          <Route path="/create">
            <Create />

          </Route>
          <Route path="/login">
            <Login />

          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>

          <Route path="/search">
            <Search />
          </Route>
          <Route path="/account">
            <Acc />
          </Route>
          <Route path="/checkout">
            {/* <Header />*/}
            <Example />

          </Route>
        </Switch>
      </Router >
    </div>
  );
}




export default App;
