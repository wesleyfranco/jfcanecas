import React from 'react';

const Button = ({descricao, handleClick, classe}) => (
    <div>
        <button onClick={handleClick} className={`btn ${classe}`}>
            {descricao}
        </button>
    </div>
)

export default Button