import React, { Component } from 'react';
import { MdChevronRight } from 'react-icons/lib/md';

class Offer extends Component {
  get offer() {
    return this.props.offer;
  }
  render() {
    const { For, YouGet, From, Because } = this.offer;

    return (
      <div className="offer">
        <div className="you-get">
          <p>
            {YouGet}
          </p>
        </div>
        <div className="content">
          <h5 className="card-title">{For}</h5>
          <h6 className="card-subtitle">{From}</h6>
          <p className="card-text text-muted">{Because}</p>
        </div>
        <div className="enter">
          <a href="javascript:;"><MdChevronRight /></a>
        </div>
      </div>
    );
  }
}

export default Offer;
