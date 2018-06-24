import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Offers from './Offers';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MdChevronLeft, MdMenu, MdHome, MdRssFeed, MdSearch } from 'react-icons/lib/md';
import './App.css';

const client = new ApolloClient({
    uri: 'https://37rpqn1m0v.lp.gql.zone/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" id="backbutton" href="#"><MdChevronLeft /></a>
            </li>
            <li id="currentPage">
              <h1>Affiliates</h1>
            </li>
          </ul>
          <h2>Available Offers</h2>
          <Offers />
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#"><MdMenu /></a>
            <a className="navbar-brand" href="#"><MdHome /></a>
            <a className="navbar-brand" href="#"><MdRssFeed /></a>
            <a className="navbar-brand" href="#"><MdSearch /></a>
          </nav>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
