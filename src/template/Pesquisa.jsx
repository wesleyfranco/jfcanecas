import React from 'react';

import Input from '../form/Input';
import Button from '../template/BotaoAcao';

const Pesquisa = (props) => (
    <div>
        <Input tipo="search" nome="pesquisa_cliente" descricao="Digite o nome do cliente" handleChange={props.handleChangePesquisa} valor={props.valor} />
        <Button icone="search" classe="info" handleClick={props.handlePesquisa} />
        <Button icone="close" classe="danger" handleClick={props.handleLimpar} />
    </div>
)

export default Pesquisa