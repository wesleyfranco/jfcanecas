import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({itemAtivo, mostraHome}) => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {MostraHome(mostraHome)}          
            <li className="breadcrumb-item active" aria-current="page">
               {itemAtivo}              
            </li>
        </ol>
    </nav>
)

const MostraHome = (mostrar) => {
    if (mostrar) {
        return (
            <li className="breadcrumb-item"> 
                <Link to="/pedidos">Home</Link>
            </li>
        )
    }
    return ''
}

export default Breadcrumb