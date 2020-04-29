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
            <div className="card card-panel  p-4 mt-4">
                <div className='row'>
                    <div className='col-12'>
                        <b>Valor estimado da pensão</b>
                    </div>
                    <div className='col-8 col-lg-10 '>
                        <p className="resultado">
                                R$ {valor.toFixed(2).replace('.',',')} 
                            </p>
                    </div>
                    <div className="col-4 col-sm-4 col-lg-2">
                        <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.imprimir} ><i className="material-icons">print</i></a>
                    </div>
                </div>
                <div className='row'> Estimativa calculada em: {data.getDate()}/{data.getMonth()}/{data.getFullYear()}</div>
                <div className='row'><p> * A utilização dessa estimativa para fins processuais é de inteira responsabilidade do advogado da parte.</p></div>
            </div>
        )
       
    }

 
}
export default TotalPensao