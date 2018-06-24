import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Offer from './Offer';

class Offers extends Component {
  render() {
    return (
      <div className="offers">
        <Query query={gql`
          {
            allOffers {
              id
              For
              YouGet
              From
              Because
            }
          }
        `}>
          {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error {error}</p>;
            return data.allOffers.map(offer => <Offer key={offer.id} offer={offer} />);
          }}
        </Query>
      </div>
    );
  }
}

export default Offers;
