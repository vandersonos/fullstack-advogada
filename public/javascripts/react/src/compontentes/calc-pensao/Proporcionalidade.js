import React from 'react';
import M from "materialize-css";
import $ from 'jquery';

class Proporcionalidade extends React.Component{
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        let lista = props.lista
        this.calculaValor = this.calculaValor.bind(this);
  
        this.state = {
            // "DataSource" é uma fonte de dados global
            perc_pagador:0.0,
            perc_recebedor:0.0,
            valorRecebedor: 0.0,
            valorEstimado:0.0,
            custoTotal: props.custoTotal
        };

    }
    componentDidMount() {
        this.nrItens = 0
        M.AutoInit();
    }
     calculaValor(){
        let lista = this.state.lista;
        let valorPagador = parseFloat($('#p-renda-pagar').val())
        let valorRecebedor = parseFloat($('#p-renda-receber').val())
        let valorTotal = valorRecebedor + valorPagador
        let perc_pagador = parseFloat((valorPagador * 100)/valorTotal)
        let perc_recebedor = parseFloat((valorRecebedor * 100)/valorTotal)
        
        let valorPagadorTotal = (parseFloat(this.state.custoTotal)*(perc_pagador/100))
        let valorRecebedorTotal  = (parseFloat(this.state.custoTotal)*(perc_recebedor/100))
        this.setState({
            valorRecebedor: valorRecebedorTotal.toFixed(2),
            valorEstimado: valorPagadorTotal.toFixed(2), 
            perc_recebedor: perc_recebedor.toFixed(2), 
            perc_pagador: perc_pagador.toFixed(2)
        })
        console.log(this.state,'this.state')
    }
    render(){
        return (
            <div class='row'>
                <div class='col s12 m6'>
                    <div class="row">
                        <div class="input-field col s12">
                            <input placeholder="" id="p-renda-pagar" type="number" onChange={this.calculaValor} class="validate"/>
                            <label for="p-renda-pagar">Renda da pessoal que vai pagar</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input placeholder="" id="p-renda-receber" type="number" onChange={this.calculaValor}  class="validate"/>
                            <label for="p-renda-receber">Renda da pessoal que vai receber</label>
                        </div>
                    </div>
                </div>
                <div class='col s12 m6'>
                    <div class="row">
                        Porcentagem de responsabilidade pagador
                        <span class="resultado col s6">
                            {this.state.perc_pagador} %
                        </span>
                        <span class="resultado col s6">
                            R$ {this.state.valorEstimado} 
                        </span>
                    </div>
                    <div class="row">
                        Porcentagem de responsabilidade recebedor
                        <span class="resultado col s6">
                            {this.state.perc_recebedor} % 
                        </span>
                        <span class="resultado col s6">
                            R$ {this.state.valorRecebedor}
                        </span>
                    </div>
                </div>
            </div>
        )
       
    }

 
}
export default Proporcionalidade