import React from 'react';

const BotaoAcao = ({icone, classe, handleClick, escondeBotao}) => {
    if (!escondeBotao) {
        return (
            <button className={`btn btn-${classe}`} onClick={handleClick}>
                <i className={`fa fa-${icone}`}></i>
            </button>
        )
    }
    return null
}

export default BotaoAcao