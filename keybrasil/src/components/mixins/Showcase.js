import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './showcase.scss';


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
        .then(json => this.setState({ 
            data: json,
            showcaseLoaded: true
        }));
    }

    render() {
        return (
            <div className="sh_container">
                <div className="sh_container__item">
                    {
                        this.state.showcaseLoaded ?
                        this.state.data.results.products.map((item, index) => (
                            <div className={`slideshow ${index == 0 ? 'active' : 'deactive'}`} key={item.id}>
                                <div className="slideshow__info" key="0">
                                    <div className="slideshow__info__container">
                                        <h2 className="slideshow__info__container__brand">
                                            { item.brand }
                                        </h2> 
                                        <h1 className="slideshow__info__container__name">
                                            { item.name }
                                        </h1>
                                        <h3 className="slideshow__info__container__price">
                                            { item.price }
                                        </h3>
                                        <Link to={`/product/${item.slug}`} className="slideshow__info__container__button" href="/fc660c-black">
                                            Comprar
                                        </Link>
                                    </div>
                                </div>
                                <div className="slideshow__image">
                                    <img className="slideshow__image__img" src={item.main_image} alt="keyboard 1" />
                                </div>
                            </div>
                        ))
                        :
                        <div className="loading__slideshow">
                            <div className="loading__slideshow__info" key="0">
                                <div className="loading__slideshow__info__container">
                                    <h2 className="loading__slideshow__info__container__brand">
                                        BRAND
                                    </h2>
                                    <h1 className="loading__slideshow__info__container__name">
                                        LOADING KEYBOARD
                                    </h1>
                                    <h3 className="loading__slideshow__info__container__price">
                                        666,24
                                    </h3>
                                    <a className="loading__slideshow__info__container__button" href="/">
                                        Comprar
                                    </a>
                                </div>
                            </div>
                            <div className="loading__slideshow__image">
                                <div className="loading__slideshow__image__img"></div>
                            </div>
                        </div>
                    }
                </div>
                <div className="slidecount">
                    <div className="slidecount__dots">
                        <div className="slidecount__dots__dot dot-active"></div>
                        <div className="slidecount__dots__dot"></div>
                        <div className="slidecount__dots__dot"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Showcase;
