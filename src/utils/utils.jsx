import React from 'react';

const ConverteDataBr = (dataUs) => {
    const dataArray = dataUs.split('-')
    const dataBr = dataArray[2] + '/' + dataArray[1] + '/' + dataArray[0]
    return dataBr
}

const MontaGrid = (props) => {
    const numeroColunas = props.colunas.split(' ')
    let classesColunas = `col-xs-${numeroColunas[0]}`
    classesColunas += ` col-sm-${numeroColunas[1]}`
    classesColunas += ` col-md-${numeroColunas[2]}`
    classesColunas += ` col-lg-${numeroColunas[3]}`
    if (!props.semLinha) {
        return (
            <div className="row mb-2">
                <div className={classesColunas}>
                    {props.children}
                </div>
            </div>
        )
    }
    return (
        <div className={classesColunas}>
            {props.children}
        </div>
    )
}

const formataDinheiro = (valor) => {
    valor = parseFloat(valor)
	return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
    

export { ConverteDataBr, MontaGrid, formataDinheiro }
