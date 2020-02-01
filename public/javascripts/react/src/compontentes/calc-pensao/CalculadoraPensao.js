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
  
        this.state = {
            custoTotal:5000,
            totalPensao:0
        }

    }
    componentDidMount() {
        
        M.AutoInit();
    }
    render(){
        return (
            <div >
                <CustosIndividuais lista={[]}/>
                <hr/>
                <CustosColetivos lista={[]}/>
                <hr/>
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
                <hr/>
                <Proporcionalidade custoTotal={this.state.custoTotal}/>
                
                <hr/>
                <TotalPensao total={this.state.totalPensao}/>
   
            </div>
        )
       
    }
}
export default CalculadoraPensao