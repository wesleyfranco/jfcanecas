import React from 'react';

const Form = (props) => {
    const {nome, handleSubmit} = props
    return (
        <React.Fragment>
            <form name={nome} onSubmit={handleSubmit}>
                {props.children}
            </form>
        </React.Fragment>
    )
}

export default Form