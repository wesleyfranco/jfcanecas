import React, {Component } from 'react';
import axios from 'axios';

import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../form/Button';
import Breadcrumb from '../template/Breadcrumb';
import { MontaGrid, MostraErros, MostraSucessos, LimpaMensagens } from '../utils/utils';
import { RetornaUrlApi } from '../utils/config';

const URL = RetornaUrlApi();

class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            cliente: '',
            telefone: '',
            nome_arte: '', 
            tipo_caneca: '', 
            qtd_itens: '', 
            valor_total: '', 
            data_entrega: '',
            erros: [],
            msg_sucesso: []
        }
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
            LimpaMensagens(this)
            if (resposta.data.erro === false) {
                this.setState( { 
                    cliente: '',
                    telefone: '',
                    nome_arte: '', 
                    tipo_caneca: '', 
                    qtd_itens: '', 
                    valor_total: '', 
                    data_entrega: '',
                    msg_sucesso: [resposta.data.msg] 
                } )
                //this.props.history.push('/pedidos')
            } else {
                this.setState( { erros: [resposta.data.msg] } )
            }
        });
    }
    render() {
        let erros = ''
        let msg_sucesso = ''
        if (this.state.erros.length) {
            erros = MostraErros(this.state.erros)
        }
        if (this.state.msg_sucesso.length) {
            msg_sucesso = MostraSucessos(this.state.msg_sucesso)
        }
        return (
            <div>
                {erros}
                {msg_sucesso}
                <Breadcrumb itemAtivo="Cadastro" mostraHome={true} />
                <Form nome="cadastro">
                    <MontaGrid colunas="12 12 12 12">
                        <Input tipo="text" nome="cliente" descricao="Nome do cliente" handleChange={this.handleChange} valor={this.state} />
                    </MontaGrid>
                    <MontaGrid colunas="12 12 12 12">
                        <Input tipo="tel" nome="telefone" descricao="Telefone do cliente" handleChange={this.handleChange} valor={this.state} />
                    </MontaGrid>
                    <MontaGrid colunas="12 12 12 12">
                        <Input tipo="text" nome="nome_arte" descricao="Nome da arte" handleChange={this.handleChange} valor={this.state} />
                    </MontaGrid>
                    <MontaGrid colunas="12 12 12 12">
                        <Input tipo="text" nome="tipo_caneca" descricao="Tipo da caneca" handleChange={this.handleChange} valor={this.state} />
                    </MontaGrid>
                    <MontaGrid colunas="12 12 12 12">
                        <Input tipo="number" nome="qtd_itens" descricao="Quantidade de itens" handleChange={this.handleChange} valor={this.state} />
                    </MontaGrid>
                    <MontaGrid colunas="12 12 12 12">
                        <Input tipo="number" nome="valor_total" descricao="Valor total" handleChange={this.handleChange} valor={this.state} />
                    </MontaGrid>
                    <MontaGrid colunas="12 12 12 12">
                        <Input tipo="date" nome="data_entrega" descricao="Data de entrega" handleChange={this.handleChange} valor={this.state} />
                    </MontaGrid>
                    <MontaGrid colunas="12 12 12 12">
                        <Button descricao="Cadastar" classe="btn-primary" handleClick={this.handleClick} />
                    </MontaGrid>
                </Form>
            </div>
        )
    }
}

export default Cadastro