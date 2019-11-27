import React from 'react';

const BotaoAcao = ({icone, classe, handleClick}) => (
    <button className={`btn ${classe}`} onClick={handleClick}>
        <i className={`fa ${icone}`}></i>
    </button>
)

export default BotaoAcao