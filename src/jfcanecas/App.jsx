import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Template from '../template/Template';

class App extends Component {
    render() {
        return (          
            <div className="container">
                <Template titulo="JF Canecas" />
            </div>
        )
    }
}

export default App
