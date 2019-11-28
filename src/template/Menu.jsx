import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({titulo}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="#" className="navbar-brand">
                <i className="fa fa-beer mr-2 size-5"></i>
                {titulo}
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarJFCanecas" aria-controls="navbarJFCanecas" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarJFCanecas">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/pedidos" className="nav-link">Pedidos</Link>  
                    </li>
                    <li className="nav-item">
                        <Link to="/cadastro" className="nav-link">Cadastro</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Menu