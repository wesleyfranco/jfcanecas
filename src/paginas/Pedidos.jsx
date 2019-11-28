import React, { Component } from 'react';
import axios from 'axios';

import Breadcrumb from '../template/Breadcrumb';
import ItensPedido from '../template/ItensPedido';

const URL = 'http://localhost:8080/';

class Pedidos extends Component {
    constructor(props) {
        super(props)
        this.state = { lista: [] }
        this.handleMarcaEntregue = this.handleMarcaEntregue.bind(this)
        this.handleExclui = this.handleExclui.bind(this)

        this.atualiza()
    }
    atualiza() {        
        axios.get(URL)
        .then((resposta) => {
            this.setState({ lista: resposta.data })
        })
    }
    handleMarcaEntregue(objeto) {
        alert(objeto.id)
    }
    handleExclui(objeto) {
        const idPedido = objeto.id;
        axios.delete(`${URL}${idPedido}`)
        .then(resposta => {
            if (resposta.data.erro === false) {
                this.atualiza();
            } else {
                alert(resposta.data.msg)
            }
        })
    }
    render() {
        return (
            <div>
                <Breadcrumb itemAtivo="Pedidos" mostraHome={false} />
                <table className="table table-hover table-dark">
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
        )
    }
}

export default Pedidos

