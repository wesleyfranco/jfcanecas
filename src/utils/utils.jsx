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
    return (
        <div className="row mb-2">
            <div className={classesColunas}>
                {props.children}
            </div>
        </div>
    )
}
    

export { ConverteDataBr, MontaGrid }
