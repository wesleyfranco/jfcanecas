import React from 'react';

const ItensPedido = ({lista}) => {
    return lista.map((objeto) => (
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
                {objeto.data_entrega}
            </td>
        </tr>
    ))
}

export default ItensPedido