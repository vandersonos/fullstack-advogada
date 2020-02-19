import React from 'react';
import M from "materialize-css";
import $ from 'jquery';
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
        this.setState({totalIndividual:valor, custoTotal: valor+this.state.totalColetivo});
        
    }

    handleTotalColetivoChange(valor) {
        this.setState({totalColetivo: valor, custoTotal: this.state.totalIndividual+valor});
        
    }
    handleTotalPensaoChange(valor){
        this.setState({totalPensao:valor});
    }

    componentDidMount() {
        
        M.AutoInit();
    }
    render(){
        return (
            <div className="col s12 m12 l12 ">
                <CustosIndividuais lista={[]} totalIndividual={this.state.totalIndividual}  onTotalIndividualChange={this.handleTotalIndividualChange}/>
                <hr/>
                <CustosColetivos lista={[]} totalColetivo={this.state.totalColetivo} onTotalColetivoChange={this.handleTotalColetivoChange}/>
                <hr/>
                <div className="card-panel">
                    <div class='row'>
                        <div class='col s12 m6'>
                            <b>Total do custo</b>
                        </div>
                        <div class='col s12 m6'>
                            <span class="resultado">
                                R$ {this.state.custoTotal} 
                            </span>
                        </div>
                    </div>
                </div>
                <hr/>
                <Proporcionalidade custoTotal={this.state.custoTotal}  onTotalPensaoChange={this.handleTotalPensaoChange}/>
                
                <hr/>
                <TotalPensao valor={this.state.totalPensao}/>
   
            </div>
        )
       
    }
}
export default CalculadoraPensao