import React from 'react';

import BotaoAcao from './BotaoAcao';
import { ConverteDataBr, formataDinheiro } from '../utils/utils';
import './ItensPedido.css';

const ItensPedido = (props) => {
    if (props.lista.length) {
        return props.lista.map((objeto) => (
            <tr key={objeto.id} className={(parseInt(objeto.entregue) === 1) ? 'pedido-entregue' : ''}>
                <td>
                    {objeto.cliente}
                </td>
                <td>
                    {objeto.nome_arte}
                </td>
                <td>
                    {objeto.tipo_caneca}
                </td>
                <td>
                    {objeto.qtd_itens}
                </td>
                <td>
                    {formataDinheiro(objeto.valor_total)}
                </td>
                <td>
                    {ConverteDataBr(objeto.data_entrega)}
                </td>
                <td>
                    <span className="mr-2">
                        <BotaoAcao icone="check" classe="success" handleClick={() => props.handleMarcaEntregue(objeto)} escondeBotao={(parseInt(objeto.entregue) === 1) ? true : false} />
                    </span>
                    <BotaoAcao icone="trash-o" classe="danger" handleClick={() => props.handleExclui(objeto)} />
                </td>
            </tr>
        ))
    }
    return (
        <tr>
            <td colSpan="7">
                <h5 className="text-center">Nenhum pedido encontrado</h5>
            </td>
        </tr>
    )   
}

export default ItensPedido