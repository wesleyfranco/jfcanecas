import React, {Component } from 'react';
import axios from 'axios';

import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../form/Button';
import Breadcrumb from '../template/Breadcrumb';

const URL = 'http://localhost:8080/';

class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleChange   = this.handleChange.bind(this)
        this.handleClick    = this.handleClick.bind(this)
    }
    handleChange(e) {
       // Seta o estado com os dados do formulário 
       this.setState({
           [e.target.name] : e.target.value
       })
    }
    handleClick(e) {
        e.preventDefault()
        const dados = this.state
        axios.post(URL, { ...dados })
        .then(resposta => {
            if (resposta.data.numPedido > 0) {
                this.props.history.push('/pedidos');
            }
        });
    }
    render() {
        return (
            <div>
                <Breadcrumb itemAtivo="Cadastro" mostraHome={true} />
                <Form nome="cadastro">
                    <Input tipo="text" nome="cliente" descricao="Nome do cliente" handleChange={this.handleChange} valor={this.state} />
                    <Input tipo="text" nome="nome_arte" descricao="Nome da arte" handleChange={this.handleChange} valor={this.state} />
                    <Input tipo="text" nome="tipo_caneca" descricao="Tipo da caneca" handleChange={this.handleChange} valor={this.state} />
                    <Input tipo="number" nome="qtd_itens" descricao="Quantidade de itens" handleChange={this.handleChange} valor={this.state} />
                    <Input tipo="number" nome="valor_total" descricao="Valor total" handleChange={this.handleChange} valor={this.state} />
                    <Input tipo="date" nome="data_entrega" descricao="Data de entrega" handleChange={this.handleChange} valor={this.state} />
                    <Button descricao="Cadastar" classe="btn-primary" handleClick={this.handleClick} />
                </Form>
            </div>
        )
    }
}

export default Cadastro