import React from 'react';
import './dropdown.scss';


function Dropdown() {
    return (
        <div className="dropdown hidden" id="dropdown_menu">
            <div className="square" ></div>
            <ul className="dropdown__list">
                <li className="dropdown__list__option">
                    <a className="dropdown__list__option__link" href="/all">TODOS OS TECLADOS</a>
                </li>
                <li className="dropdown__list__option">
                    <a className="dropdown__list__option__link" href="/by-price">POR PREÇO</a>
                </li>
                <li className="dropdown__list__option">
                    <a className="dropdown__list__option__link" href="/by-brand">POR MARCA</a>
                </li>
                <li className="dropdown__list__option">
                    <a className="dropdown__list__option__link" href="/by-switch">POR SWITCH</a>
                </li>
                <li className="dropdown__list__option">
                    <a className="dropdown__list__option__link" href="/switch">TODOS OS SWITCHES</a>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;
