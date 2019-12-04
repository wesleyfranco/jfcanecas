import React from 'react';

const ConverteDataBr = (dataUs) => {
    const dataArray = dataUs.split('-')
    const dataBr = dataArray[2] + '/' + dataArray[1] + '/' + dataArray[0]
    return dataBr
}

const MontaGrid = (props) => {
    const numeroColunas = props.colunas.split(' ')
    let classesColunas = `col-${numeroColunas[0]}`
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

const FormataDinheiro = (valor) => {
    valor = parseFloat(valor)
	return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const MostraErros = (erros) => {
    if (erros.length) {
        let listaErros = erros.map((erro, indice) => {
            return <li key={indice}>{erro}</li>
        })
        return (
            <div className="alert alert-danger" role="alert">
                <ul>
                    {listaErros}
                </ul>
            </div>
        )
    }
    return null
}

const MostraSucessos = (msg_sucessos) => {
    if (msg_sucessos.length) {
        let listaSucessos = msg_sucessos.map((sucesso, indice) => {
            return <li key={indice}>{sucesso}</li>
        })
        return (
            <div className="alert alert-success" role="alert">
                <ul>
                    {listaSucessos}
                </ul>
            </div>
        )
    }
    return null
}

const ControlaMensagens = (resposta, objThis) => {
    if (resposta.data.erro === false) {
        const msg_sucesso = []
        msg_sucesso.push(resposta.data.msg)
        objThis.setState( { msg_sucesso: msg_sucesso } )
        objThis.setState( { erros: [] } )
        objThis.atualiza(objThis.pesquisou());
    } else {
        const erros = []
        erros.push(resposta.data.msg)
        objThis.setState( { erros: erros } )
        objThis.setState( { msg_sucesso: [] } )
    }
}

const LimpaMensagens = (objThis) => {
    objThis.setState( { erros: [] } )
    objThis.setState( { msg_sucesso: [] } )
}
    

export { 
    ConverteDataBr, 
    MontaGrid, 
    FormataDinheiro, 
    MostraErros, 
    MostraSucessos, 
    ControlaMensagens,
    LimpaMensagens 
}
