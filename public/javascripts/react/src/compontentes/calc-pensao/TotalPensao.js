import React from 'react';
import M from "materialize-css";
import $ from 'jquery';

class TotalPensao extends React.Component{
    constructor(props) {
        super(props);
        this.imprimir = this.imprimir.bind(this);
    }
    componentDidMount() {
        M.AutoInit();
    }
    imprimir(){
        window.print()
    }

    render(){
        let valor = parseFloat(this.props.valor)
        return (
            <div className="card-panel">
                <div class='row'>
                    <div class='col s12 m5'>
                        <b>Valor estimado da pensão</b>
                    </div>
                    <div class='col s12 m5'>
                        <p class="resultado">
                                R$ {valor.toFixed(2).replace('.',',')} 
                            </p>
                    </div>
                    <div class="col s12 m2">
                        <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.imprimir} ><i class="material-icons">print</i></a>
                    </div>
                </div>
            </div>
        )
       
    }

 
}
export default TotalPensao