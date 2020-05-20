import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './showcase.scss';
import $ from 'jquery';


class Showcase extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      showcaseLoaded: false
    };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/api/store/slideshow/?format=json`)
      .then(res => res.json())
      .then(json => this.ProcessData(json));
  }

  ProcessData(json) {
    this.setState({
      data: json,
      showcaseLoaded: true
    });

    this.ShowcaseBehaviour();
  }

  ShowcaseBehaviour() {
    let slides = $(".slideshow");
    let slide_index = 0;
    let slide_max = slides.length;
    let dots = $(".slidecount__dots__dot");

    setInterval(() => {
      slide_index++;
      if (slide_index >= slide_max) {
        $(slides[slide_index - 1]).removeClass("active").addClass("deactive");
        $(slides[0]).removeClass("deactive").addClass("active");

        $(dots[slide_index - 1]).removeClass("dot-active");
        $(dots[0]).addClass("dot-active");

        slide_index = 0;
      } else {
        if (slide_index > 0) {
          $(slides[slide_index - 1]).removeClass("active").addClass("deactive");
          $(slides[slide_index]).removeClass("deactive").addClass("active");

          $(dots[slide_index - 1]).removeClass("dot-active");
          $(dots[slide_index]).addClass("dot-active");
        }
      }

    }, 10000);
  }

  render() {
    return (
      <div className="sh_container">
        <div className="sh_container__item">
          {this.state.showcaseLoaded ? (
            this.state.data.results.products.map((item, index) => (
              <div className={`slideshow ${index === 0 ? 'active' : 'deactive'}`} key={item.id}>
                <div className="slideshow__info" key="0">
                  <div className="slideshow__info__container">
                    <h2 className="slideshow__info__container__brand">
                      {item.brand}
                    </h2>
                    <h1 className="slideshow__info__container__name">
                      {item.name}
                    </h1>
                    <h3 className="slideshow__info__container__price">
                      R$ {item.price}
                    </h3>
                    <Link to={`/product/${item.slug}`} className="slideshow__info__container__button">
                      COMPRAR
                                    </Link>
                  </div>
                </div>
                <div className="slideshow__image">
                  <img className="slideshow__image__img" src={item.main_image} alt="keyboard 1" />
                </div>
              </div>
            ))
          ) : (
              <div className="loading__slideshow">
                <div className="loading__slideshow__info" key="0">
                  <div className="loading__slideshow__info__container">
                    <h2 className="loading__slideshow__info__container__brand">BRAND</h2>
                    <h1 className="loading__slideshow__info__container__name">LOADING KEYBOARD</h1>
                    <h3 className="loading__slideshow__info__container__price">PRICING</h3>
                    <a className="loading__slideshow__info__container__button" href="/">COMPRAR</a>
                  </div>
                </div>
                <div className="loading__slideshow__image">
                  <div className="loading__slideshow__image__img"></div>
                </div>
              </div>
            )
          }
        </div>
        <div className="slidecount">
          <div className="slidecount__dots">
            {this.state.showcaseLoaded && (
              this.state.data.results.products.map((item, index) => (
                <div className={`slidecount__dots__dot ${index === 0 && 'dot-active'}`} key={index} ></div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
