import React from 'react';

const Cabecalho = ({nome}) => (
    <React.Fragment>
        <header className="page-header">
            <h2>{nome}</h2>
        </header>
    </React.Fragment>
)

export default Cabecalho