import React from 'react';

import Input from '../form/Input';
import Button from '../template/BotaoAcao';
import { MontaGrid } from '../utils/utils';

const Pesquisa = (props) => (
    <div className="row mb-3">
        <MontaGrid colunas="8 10 10 10" semLinha={true}>
            <Input tipo="search" nome="pesquisa_cliente" descricao="Digite o nome do cliente ou telefone" handleChange={props.handleChangePesquisa} valor={props.valor} />
        </MontaGrid>
        <MontaGrid colunas="4 2 2 2" semLinha={true}>
            <span className="mr-1">
                <Button icone="search" classe="info" handleClick={props.handlePesquisa} />
            </span>
            <Button icone="close" classe="danger" handleClick={props.handleLimpar} />
        </MontaGrid>
    </div>
)

export default Pesquisa