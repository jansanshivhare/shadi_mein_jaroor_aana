import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/jquery/dist/jquery"
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Service from "./Pages/Service"
import Error404 from "./Pages/Error404"
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      
      <Navbar />
        <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path = "/about" component={About} />
            <Route exact path = "/contact" component={Contact} />
            <Route exact path = "/service" component={Service} />
            <Route exact path = "/error404" component={Error404} />
            <Redirect to = "/Error404" />
        </Switch>
      <Footer />
    </>
  )
}

export default App;
