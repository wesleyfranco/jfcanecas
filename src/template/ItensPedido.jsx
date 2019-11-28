import React from 'react';

import BotaoAcao from './BotaoAcao';
import { ConverteDataBr } from '../utils/utils';

const ItensPedido = (props) => {
    return props.lista.map((objeto) => (
        <tr key={objeto.id}>
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
                {objeto.valor_total}
            </td>
            <td>
                {ConverteDataBr(objeto.data_entrega)}
            </td>
            <td>
                <span className="mr-2">
                    <BotaoAcao icone="check" classe="success" handleClick={() => props.handleMarcaEntregue(objeto)} />
                </span>
                <BotaoAcao icone="trash-o" classe="danger" handleClick={() => props.handleExclui(objeto)} />
            </td>
        </tr>
    ))
}

export default ItensPedido