import React from 'react';

import Menu from './Menu';

const Cabecalho = ({titulo}) => (
    <header className="page-header mb-4">
        <Menu titulo={titulo} />
    </header>
)

export default Cabecalho