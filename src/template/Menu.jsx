import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({titulo}) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link to="#" className="navbar-brand">{titulo}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarJFCanecas" aria-controls="navbarJFCanecas" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarJFCanecas">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/pedidos" className="nav-link">Pedidos</Link>  
                    </li>
                    <li className="nav-item active">
                        <Link to="/cadastro" className="nav-link">Cadastro</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Menu