import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({titulo}) => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link to="#" className="navbar-brand">{titulo}</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarJFCanecas" aria-controls="navbarJFCanecas" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarJFCanecas">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/pedidos" className="nav-link">Pedidos</Link>  
                    </li>
                    <li class="nav-item active">
                        <Link to="/cadastro" className="nav-link">Cadastro</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Menu