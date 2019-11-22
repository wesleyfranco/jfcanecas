import React from 'react';

const Button = ({descricao, handleClick, classe}) => (
    <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-2 text-right">
            <button onClick={handleClick} className={`btn ${classe}`}>
                {descricao}
            </button>
        </div>
    </div>
)

export default Button