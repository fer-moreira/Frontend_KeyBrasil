import React, { Component } from 'react';

import '../styles/scss/homepage.scss';
import Showcase from './mixins/Showcase';
import ItemsGrid from './mixins/itemsGrid';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="homepage">
        <Showcase />
        <ItemsGrid />
      </div>
    );
  }
}

export default Homepage;
