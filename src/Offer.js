import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MdChevronRight } from 'react-icons/lib/md';

class Offer extends Component {
  get offer() {
    return this.props.offer;
  }

  render() {
    const { For, YouGet, From, Because, id } = this.offer;

    return (
      <div className="offer">
        <div className="you-get">
          <p style={{fontSize: '15px'}}>
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

  $(selector) {
    const root = ReactDOM.findDOMNode(this);
    return root.querySelectorAll('.you-get p');
  }

  componentDidMount(){
    const isOverflown = element =>
      element.scrollHeight > element.parentElement.clientHeight || element.scrollWidth > element.parentElement.clientWidth;

    const elements = this.$('.you-get p');
    console.log(elements);
    for (let el of elements) {
      let fontSize = parseInt(el.style.fontSize);
      let i = fontSize;
      while (i > 0 && isOverflown(el)) {
        fontSize--;
        el.style.fontSize = fontSize + "px";
      }
    }
  }
}

export default Offer;
