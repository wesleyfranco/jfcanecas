import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({itemAtivo}) => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"> 
                <Link to="/pedidos">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
               {itemAtivo}              
            </li>
        </ol>
    </nav>
)

export default Breadcrumb