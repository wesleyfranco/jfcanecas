import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import Rotas from '../jfcanecas/Rotas';

const Template = ({titulo}) => (
    <React.Fragment>
        <BrowserRouter>
            <Cabecalho titulo={titulo} />
            <Rotas />
            <Rodape titulo={titulo} />
        </BrowserRouter>
    </React.Fragment>
)

export default Template