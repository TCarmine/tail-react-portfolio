import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

function ThankYou() {
  return (
    <Router>
      <Route path="./thank-you.html" />     
    </Router>
  );
}

export default ThankYou;