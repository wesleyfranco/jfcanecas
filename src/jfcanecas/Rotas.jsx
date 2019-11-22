import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cadastro from '../paginas/Cadastro';
import Pedidos from '../paginas/Pedidos';
import Pagina404 from '../paginas/Pagina404';

const Rotas = (props) => ( 
    <Switch>
        <Route path="/" exact={true} component={Pedidos} />
        <Route path="/pedidos" exact={true} component={Pedidos} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path='*' component={Pagina404} />
    </Switch>
)

export default Rotas