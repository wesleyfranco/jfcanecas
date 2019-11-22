import React from 'react';

const Input = ({tipo, nome, descricao, handleChange}) => (
    <div className="col-xs-12 col-md-12 col-lg-12">
        <input type={tipo} name={nome} placeholder={descricao} className="form-control" onChange={handleChange} />
    </div>
)

export default Input