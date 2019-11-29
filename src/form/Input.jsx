import React from 'react';

const Input = ({tipo, nome, descricao, handleChange, valor}) => (
    <div className="row mb-2">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type={tipo} name={nome} value={valor[nome]} placeholder={descricao} className="form-control" onChange={handleChange} />
        </div>
    </div>
)

export default Input