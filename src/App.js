import React, { useLayoutEffect } from "react";
import Layout from "./core/Layout"

const App = () => {
 
  return(
    <Layout>
      <div className="col-md-6 offset-md-3">
            <h1 className = "p-5">React Node MonngoDB Authentication Boilerplate</h1>
            <h2>MERN STACK</h2>
            <p className = "lead">
              Hey Welcome in React,
              This is boilerpalte for Role Based Authentication
               using MERNSTACK

            </p>
      </div>
    </Layout>
  );
  
}
export default App;
