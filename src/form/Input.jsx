import React from 'react';

const Input = ({tipo, nome, descricao, handleChange, valor}) => (   
    <input type={tipo} name={nome} value={valor[nome]} placeholder={descricao} className="form-control" onChange={handleChange} />
)

export default Input