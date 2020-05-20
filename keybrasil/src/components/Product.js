import React, { Component } from 'react';
import '../styles/scss/product.scss';


class ProductComponent extends Component {
  constructor(match) {
    super();
    this.state = {
      'item_slug':match.match.params.slug
    };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/api/store/itemsgrid/?format=json`)
      .then(res => res.json())
      .then(json => this.ProcessData(json));
  }

  ProcessData(json) {
    this.setState({
      data: json,
      gridLoaded: true
    });
  }
  

  render() {
    return (
      <div>
        <h1>{this.state.item_slug}</h1>
      </div>
    );
  }
}

export default ProductComponent;
