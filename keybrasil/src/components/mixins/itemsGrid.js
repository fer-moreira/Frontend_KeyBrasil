import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './itemsgrid.scss';


class ItemsGrid extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      gridLoaded: false
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
      <div className="container">
        {this.state.gridLoaded && (
          <div className="container__grid">
            <div className="container__grid__products">
              {
                this.state.data.results.map((item, index) => (
                  <div className="container__grid__products__detail" key={index}>
                    <div className="container__grid__products__detail__info">
                      <span className="container__grid__products__detail__info__brand">{item.brand}</span>
                      <span className="container__grid__products__detail__info__name">{item.name}</span>
                    </div>
                    <div className="container__grid__products__detail__image">
                      <img className="container__grid__products__detail__image__src" src={item.main_image} alt="keyboard1" />
                    </div>
                    <div className="container__grid__products__detail__button">
                      <Link to={`/product/${item.slug}`} className="container__grid__products__detail__button__link">R$ {item.price}</Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ItemsGrid;
