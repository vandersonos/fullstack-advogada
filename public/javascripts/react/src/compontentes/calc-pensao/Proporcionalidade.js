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
            rendaPagador:0.0,
            rendaBeneficiado:0.0,
            valorTotal : 0.0,
            perc_pagador: 0.0,
            perc_recebedor: 0.0
        };

    }
    componentDidMount() {
        this.nrItens = 0
        M.AutoInit();
    }
     calculaValor(){
        let valorPagador = parseFloat($('#p-renda-pagar').val())
        let valorRecebedor = parseFloat($('#p-renda-receber').val())
        if(!valorPagador){
            return
        }
        let perc_pagador = 100
        let perc_recebedor = 0
        let total = valorRecebedor + valorPagador;
        if(valorRecebedor){
            perc_pagador = parseFloat((valorPagador * 100)/total)
            perc_recebedor = parseFloat((valorRecebedor * 100)/total)
        }
        this.setState({
            rendaPagador:valorPagador,
            rendaBeneficiado:valorRecebedor,
            valorTotal : total,
            perc_pagador:perc_pagador,
            perc_recebedor: perc_recebedor
        })
        this.props.onTotalPensaoChange((parseFloat(this.props.custoTotal)*(perc_pagador/100)));
    }
    render(){        
        let perc_pagador = this.state.perc_pagador;
        let perc_recebedor = this.state.perc_recebedor;
        
        let valorPagadorTotal = (parseFloat(this.props.custoTotal)*(perc_pagador/100)).toFixed(2).replace('.',',')
        let valorRecebedorTotal  = (parseFloat(this.props.custoTotal)*(perc_recebedor/100)).toFixed(2).replace('.',',')

        perc_pagador = perc_pagador.toFixed(2).replace('.',',')
        perc_recebedor = perc_recebedor.toFixed(2).replace('.',',')
        
        return (
            <div className="card-panel">
                <div class='row '>
                    <div className='col s12'><h5>Proporcionalidade</h5></div>
                </div>
                <div class='row '> 
                    <div class="col s12 m6">
                        <div class="input-field col s12">
                            <input placeholder="" id="p-renda-pagar" type="number" onChange={this.calculaValor} class="validate"/>
                            <label for="p-renda-pagar">Renda da pessoa que vai pagar (R$)</label>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="input-field col s12">
                        <input placeholder="" id="p-renda-receber" type="number" onChange={this.calculaValor}  class="validate"/>
                            <label for="p-renda-receber">Renda da pessoa que vai receber (R$)</label>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class="col s12 m6">
                        <h7>Porcentagem de responsabilidade pagador</h7>
                        <p className='paragrafo-resultado'>
                            <span class="resultado col s6">
                                {perc_pagador} %
                            </span>
                            <span class="resultado col s6">
                                R$ {valorPagadorTotal} 
                            </span>
                        </p>
                        
                    </div>
                    <div class="col s12 m6">
                        <h7>Porcentagem de responsabilidade beneficiado</h7>
                        <p className='paragrafo-resultado'>
                            <span class="resultado col s6">
                                {perc_recebedor} % 
                            </span>
                            <span class="resultado col s6">
                                R$ {valorRecebedorTotal}
                            </span>
                        </p>
                        
                    </div>
                </div>
            </div>
        )
       
    }

 
}
export default Proporcionalidade