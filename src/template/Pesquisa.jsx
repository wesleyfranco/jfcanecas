import React from 'react';

import Input from '../form/Input';
import Button from '../template/BotaoAcao';
import { MontaGrid } from '../utils/utils';

const Pesquisa = (props) => (
    <div className="row mb-3">
        <MontaGrid colunas="7 7 10 10" semLinha={true}>
            <Input tipo="search" nome="pesquisa_cliente" descricao="Digite o nome do cliente" handleChange={props.handleChangePesquisa} valor={props.valor} />
        </MontaGrid>
        <MontaGrid colunas="5 5 2 2" semLinha={true}>
            <span className="mr-1">
                <Button icone="search" classe="info" handleClick={props.handlePesquisa} />
            </span>
            <Button icone="close" classe="danger" handleClick={props.handleLimpar} />
        </MontaGrid>
    </div>
)

export default Pesquisa