import React from 'react';
// import M from "materialize-css";
import $ from 'jquery';

class TotalPensao extends React.Component{
    constructor(props) {
        super(props);
        this.imprimir = this.imprimir.bind(this);
    }
    componentDidMount() {
        // M.AutoInit();
    }
    imprimir(){
        window.print()
    }

    render(){
        let valor = parseFloat(this.props.valor)
        let data = new Date();

        return (
            <div className="card-panel">
                <div class='row'>
                    <div class='col s12 m12 l12'>
                        <b>Valor estimado da pensão</b>
                    </div>
                    <div class='col s8 m8 l10 '>
                        <p class="resultado">
                                R$ {valor.toFixed(2).replace('.',',')} 
                            </p>
                    </div>
                    <div class="col s4 m4 l2">
                        <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.imprimir} ><i class="material-icons">print</i></a>
                    </div>
                </div>
                <div class='row'> Estimativa calculada em: {data.getDate()}/{data.getMonth()}/{data.getFullYear()}</div>
                <div class='row'><p> * A utilização dessa estimativa para fins processuais é de inteira responsabilidade do advogado da parte.</p></div>
            </div>
        )
       
    }

 
}
export default TotalPensao