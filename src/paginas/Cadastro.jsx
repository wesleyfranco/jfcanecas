import React from 'react';

import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../form/Button';

const Cadastro = (props) => (
    <Form nome="cadastro">
        <Input tipo="text" nome="cliente" descricao="Nome do cliente" />
        <Input tipo="text" nome="nome_arte" descricao="Nome da arte" />
        <Input tipo="text" nome="tipo_caneca" descricao="Tipo da caneca" />
        <Input tipo="number" nome="qtd_itens" descricao="Quantidade de itens" />
        <Input tipo="number" nome="valor_total" descricao="Valor total" />
        <Input tipo="date" nome="data_entrega" descricao="Data de entrega" />
        <Button descricao="Cadastar" classe="btn-primary" />
    </Form>
)

export default Cadastro