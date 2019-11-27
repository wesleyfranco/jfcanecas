import React from 'react';

const BotaoAcao = ({icone, classe, handleClick}) => (
    <button className={`btn btn-${classe}`} onClick={handleClick}>
        <i className={`fa fa-${icone}`}></i>
    </button>
)

export default BotaoAcao