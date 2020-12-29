import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import About from "./componenet/pages/About";
import Contact from "./componenet/pages/Contact";
// import Home from "./componenet/pages/Home";
import Navbar from "./layout/Navbar";
import Error from "./componenet/pages/Error";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import View from './users/View';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/add" component={AddUser} />
          <Route exact path='/user/edit/:id' component={EditUser} />
          <Route exact path="/user/view/:id" component={View} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
