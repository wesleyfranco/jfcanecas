import React, { Component } from 'react';
import axios from 'axios';

import Breadcrumb from '../template/Breadcrumb';
import ItensPedido from '../template/ItensPedido';
import Pesquisa from '../template/Pesquisa';
import { RetornaUrlApi } from '../utils/config';
import { MostraErros, MostraSucessos, ControlaMensagens, LimpaMensagens } from '../utils/utils';

const URL = RetornaUrlApi();

class Pedidos extends Component {
    constructor(props) {
        super(props)
        this.state = { lista: [], pesquisa_cliente: '', erros: [], msg_sucesso: [] }
        this.handleMarcaEntregue = this.handleMarcaEntregue.bind(this)
        this.handleExclui = this.handleExclui.bind(this)
        this.handleChangePesquisa = this.handleChangePesquisa.bind(this)
        this.handlePesquisa = this.handlePesquisa.bind(this)
        this.handleLimpar = this.handleLimpar.bind(this)
        this.pesquisou = this.pesquisou.bind(this)
        
        this.atualiza()
    }
    atualiza(comPesquisa) {
        let pesquisa = ''
        if (comPesquisa) {
            pesquisa = `?cliente=${this.state.pesquisa_cliente}`
        }       
        axios.get(`${URL}${pesquisa}`)
        .then((resposta) => {
            if (resposta.data.erro) {
                const erros = []
                erros.push(resposta.data.msg)
                this.setState( { erros: erros } )
            } else {
                this.setState({ lista: resposta.data })
            }
        })
    }
    handleMarcaEntregue(objeto) {
        const idPedido = objeto.id;
        axios.patch(`${URL}${idPedido}`, { entregue: true })
        .then((resposta) => {
            LimpaMensagens(this)
            ControlaMensagens(resposta, this)
        })
    }
    handleExclui(objeto) {
        const idPedido = objeto.id;
        axios.delete(`${URL}${idPedido}`)
        .then(resposta => {
            LimpaMensagens(this)
            ControlaMensagens(resposta, this)
        })
    }
    handleChangePesquisa(e) {
        this.setState({ pesquisa_cliente: e.target.value })
    }
    handlePesquisa() {
        const cliente = this.state.pesquisa_cliente
        axios.get(`${URL}?cliente=${cliente}`)
        .then(resposta => {
            LimpaMensagens(this)
            if (resposta.data.erro) {
                this.setState( { erros: [resposta.data.msg] } )
                this.setState( { msg_sucesso: [] } )
                this.setState( { lista: [] } )
            }
            this.atualiza(true)
        });
    }
    handleLimpar() {
        LimpaMensagens(this)
        this.setState({ pesquisa_cliente: '' })
        this.atualiza(false)
    }
    pesquisou() {
        const temPesquisa = this.state.pesquisa_cliente ? true : false;
        return temPesquisa
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
                <Pesquisa handleChangePesquisa={this.handleChangePesquisa} handlePesquisa={this.handlePesquisa} handleLimpar={this.handleLimpar} valor={this.state} />
                <Breadcrumb itemAtivo="Pedidos" mostraHome={false} />
                <div className="table-responsive">
                    <table className="table table-dark">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Cliente</th>
                                <th scope="col">Arte</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Total</th>
                                <th scope="col">Entrega</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ItensPedido 
                                lista={this.state.lista} 
                                handleMarcaEntregue={this.handleMarcaEntregue} 
                                handleExclui={this.handleExclui} />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Pedidos

