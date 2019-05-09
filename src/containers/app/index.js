import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home.react';
import BananasTransaction from '../BananasTransaction.react';
import AnalyzeOrder from '../AnalyzeOrders.react';
import Navigation from '../navigation.react';
import '../../css/app.css'

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/buy" component={BananasTransaction} />
    <Route exact path="/sell" component={BananasTransaction} />
    <Route exact path="/analyze" component={AnalyzeOrder} />
  </div>
)

export default App
