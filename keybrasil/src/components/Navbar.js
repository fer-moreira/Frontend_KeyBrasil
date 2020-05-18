import React, { useEffect } from 'react';
import '../styles/scss/navbar.scss';
import Dropdown from './mixins/Dropdown';
import $ from 'jquery';

function Navbar() {
    useEffect(() => {
        let cat_btn = $("#categories_btn");
        let drop_menu = $("#dropdown_menu");

        cat_btn.mouseenter(() => {
            drop_menu.removeClass("hidden");
            cat_btn.addClass("open");
        });
        
        drop_menu.mouseleave(() => {
            drop_menu.addClass("hidden");
            cat_btn.removeClass("open");
        });
    },[]);

    return (
        <div className="navbar">
            <div className="navbar__grid">
                <div className="navbar__grid__top">
                    <div className="navbar__grid__top__icons">
                        <img className="navbar__grid__top__icons__icon" src="/icons/facebook.svg" alt="facebook" />
                        <img className="navbar__grid__top__icons__icon" src="/icons/twitter.svg" alt="twitter" />
                        <img className="navbar__grid__top__icons__icon" src="/icons/instagram.svg" alt="instagram" />
                    </div>
                    <div className="navbar__grid__top__text">
                        <span className="navbar__grid__top__text__span">Suporte</span>
                    </div>
                </div>

                <div className="navbar__grid__search">
                    <div className="navbar__grid__search__logo">
                        <img className="navbar__grid__search__logo__icon" src="/icons/keyboard.svg" alt="keyboard" />
                        <span className="navbar__grid__search__logo__name">Keys Brasil</span>
                    </div>
                    <div className="navbar__grid__search__inputfield">
                        <input className="navbar__grid__search__inputfield__field" placeholder="Pesquise por algo aqui" />
                        <button className="navbar__grid__search__inputfield__button">Pesquisar
                        <img className="navbar__grid__search__inputfield__button__icon" src="/icons/search.svg" alt="search" />
                        </button>
                    </div>
                    <div className="navbar__grid__search__cart">
                        <div className="navbar__grid__search__cart__button">
                            <img className="navbar__grid__search__cart__button__icon" src="/icons/cart.svg" alt="cart" />
                            <span className="navbar__grid__search__cart__button__text">R$ 0,0</span>
                        </div>
                    </div>
                </div>

                <div className="navbar__grid__buttons">
                    <div className="navbar__grid__buttons__left">
                        <div className="navbar__grid__buttons__left__buttons">
                            <div className="navbar__grid__buttons__left__buttons__home">
                                <a className="navbar__grid__buttons__left__buttons__home__btn" href="/">
                                    <img className="navbar__grid__buttons__left__buttons__home__btn__icon" src="/icons/home.svg" alt="home" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar__grid__buttons__right">
                        <div className="navbar__grid__buttons__right__buttons">
                            <a className="navbar__grid__buttons__right__buttons__btn" href="/top">TOP</a>
                            <div className="vertical_line"></div>
                            <button className="navbar__grid__buttons__right__buttons__btn" id="categories_btn">CATEGORIAS</button>
                            <Dropdown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
