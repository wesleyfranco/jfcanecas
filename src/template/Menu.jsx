import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({titulo}) => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">
                    <i className="fa fa-calendar-check-o"></i> {titulo}
                </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/pedidos">Pedidos</Link>
                    </li>
                    <li>
                        <Link to="/cadastro">Cadastro</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Menu