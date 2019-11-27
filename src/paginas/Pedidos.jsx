import React, { Component } from 'react';

import ItensPedido from '../template/ItensPedido';

class Pedidos extends Component {
    constructor(props) {
        super(props)
        this.state = {lista: [
            {
                id: '1',
                cliente: 'Wesley',
                nome_arte: 'Homem aranha',
                tipo_caneca: 'Long Drink',
                qtd_itens: 150,
                valor_total: 220.00,
                data_entrega: '2019-12-10'
            },
            {
                id: '2',
                cliente: 'Paulo',
                nome_arte: 'Esqueleto',
                tipo_caneca: 'Long Drink',
                qtd_itens: 80,
                valor_total: 130.00,
                data_entrega: '2019-12-20'
            },
            {
                id: '3',
                cliente: 'César',
                nome_arte: 'Palhaço',
                tipo_caneca: 'Tulipa',
                qtd_itens: 50,
                valor_total: 80.00,
                data_entrega: '2019-12-02'
            }
        ]}
    }
    atualiza() {

    }
    render() {
        return (
            <div>
                <h1>Lista de pedidos</h1>
                <table className="table table-hover table-dark">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Cliente</th>
                            <th scope="col">Arte</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Total</th>
                            <th scope="col">Entrega</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItensPedido lista={this.state.lista} />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Pedidos

