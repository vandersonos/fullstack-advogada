import React from 'react';
// import M from "materialize-css";
// import $ from 'jquery';
import './CalculadoraPensao.css';
import CustosIndividuais from './CustosIndividuais.js';
import CustosColetivos from './CustosColetivos.js';
import Proporcionalidade from './Proporcionalidade.js';
import TotalPensao from './TotalPensao.js';
import Navbar from '../NavBar.js';
import Artigos from '../CollArtigos.js';

class CalculadoraPensao extends React.Component{
    constructor(props) {
        super(props);
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
        
        // M.AutoInit();
    }
    render(){
        let total = parseFloat(this.state.totalPensao)
        let custoTotal = parseFloat(this.state.custoTotal)
        console.log(this.props)
        return (
            <div className="container-calculadora">
                <Navbar artigos={Artigos}/>
                <div className='container row calculadora'>
                    <div className="col-12 col-md-12 col-lg-12 ">
                        <div className="card card-panel p-4 mt-4">
                            <div className=' row '>
                                <div className="col-4 col-md-1">
                                <img src="../../img/calculadora.svg" className='logo-calculadora'></img>
                                </div>
                                <div className="col-8 col-md-11 ">
                                    <h6>Estimativa de valor da pensão de alimentícia</h6>
                                    <p>Os valores calculados abaixo são apenas uma estimativa, o valor acertado será defindo em audiência.</p>
                                </div>
                            </div>
                        </div>
                        <CustosIndividuais  totalIndividual={this.state.totalIndividual}  onTotalIndividualChange={this.handleTotalIndividualChange}/>
                        <hr/>
                        <CustosColetivos  totalColetivo={this.state.totalColetivo} onTotalColetivoChange={this.handleTotalColetivoChange}/>
                        <hr/>
                        <div className="card card-panel  p-4 mt-4">
                            <div className='row'>
                                <div className='col-12 col-md-8 col-lg-10'>
                                    <h6>Total do custo</h6>
                                    <h6><small> Custo Individual + (Custo Coletivo / Moradores)</small></h6>
                                </div>
                                <div className='col-12 col-md-4 col-lg-2'>
                                    <div className="resultado">
                                        R$ {custoTotal.toFixed(2).replace('.',',')} 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <Proporcionalidade custoTotal={this.state.custoTotal}  onTotalPensaoChange={this.handleTotalPensaoChange}/>
                        
                        <hr/>
                        <TotalPensao valor={total.toFixed(2).replace('.',',')}/>
        
                    </div>
                </div>
            </div>
        )
       
    }
}
export default CalculadoraPensao