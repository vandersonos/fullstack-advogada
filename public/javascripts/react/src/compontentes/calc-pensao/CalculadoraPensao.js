import React from 'react';
import M from "materialize-css";
import $ from 'jquery';
import './CalculadoraPensao.css';
import CustosIndividuais from './CustosIndividuais.js';
import CustosColetivos from './CustosColetivos.js';
import Proporcionalidade from './Proporcionalidade.js';
import TotalPensao from './TotalPensao.js';

class CalculadoraPensao extends React.Component{
    constructor(props) {
        super(props);
        // this.calculaValor = this.calculaValor.bind(this);


        this.handleTotalIndividualChange = this.handleTotalIndividualChange.bind(this);
        this.handleTotalColetivoChange = this.handleTotalColetivoChange.bind(this);
        this.handleTotalPensaoChange = this.handleTotalPensaoChange.bind(this);
        this.state = {totalIndividual: 0.0, totalColetivo: 0.0, custoTotal:0.0, totalPensao:0};
    }

    handleTotalIndividualChange(valor) {
        this.setState({totalIndividual:valor, custoTotal: parseFloat(valor)+parseFloat(this.state.totalColetivo)});
        
    }

    handleTotalColetivoChange(valor) {
        this.setState({totalColetivo: valor, custoTotal: parseFloat(this.state.totalIndividual)+parseFloat(valor)});
        
    }
    handleTotalPensaoChange(valor){
        this.setState({totalPensao:valor});
    }

    componentDidMount() {
        
        M.AutoInit();
    }
    render(){
        let total = parseFloat(this.state.totalPensao)
        let custoTotal = parseFloat(this.state.custoTotal)
        return (
            <div className="col s12 m12 l12 ">
                <div className="card-panel">
                    <h5>Estimativa de valor da pensão de alimentícia</h5>
                </div>
                <CustosIndividuais lista={[]} totalIndividual={this.state.totalIndividual}  onTotalIndividualChange={this.handleTotalIndividualChange}/>
                <hr/>
                <CustosColetivos lista={[]} totalColetivo={this.state.totalColetivo} onTotalColetivoChange={this.handleTotalColetivoChange}/>
                <hr/>
                <div className="card-panel">
                    <div class='row'>
                        <div class='col s12 m8 l10'>
                            <b>Total do custo</b>
                        </div>
                        <div class='col s12 m4 l2'>
                            <span class="resultado">
                                R$ {custoTotal.toFixed(2).replace('.',',')} 
                            </span>
                        </div>
                    </div>
                </div>
                <hr/>
                <Proporcionalidade custoTotal={this.state.custoTotal}  onTotalPensaoChange={this.handleTotalPensaoChange}/>
                
                <hr/>
                <TotalPensao valor={total.toFixed(2).replace('.',',')}/>
   
            </div>
        )
       
    }
}
export default CalculadoraPensao