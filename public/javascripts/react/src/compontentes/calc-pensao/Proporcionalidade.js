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
        let lista = this.state.lista;
        let valorPagador = parseFloat($('#p-renda-pagar').val())
        let valorRecebedor = parseFloat($('#p-renda-receber').val())

        let total = valorRecebedor + valorPagador;
        let perc_pagador = parseFloat((valorPagador * 100)/total)
        this.setState({
            rendaPagador:valorPagador,
            rendaBeneficiado:valorRecebedor,
            valorTotal : total,
            perc_pagador:perc_pagador,
            perc_recebedor: parseFloat((valorRecebedor * 100)/total)
        })
        this.props.onTotalPensaoChange((parseFloat(this.props.custoTotal)*(perc_pagador/100)));
        console.log(this.state,'this.state',this.state.custoTotal)
    }
    render(){
        console.log(this.props.custoTotal, 'total proporcional',this.state.custoTotal)
        
        let valorTotal = this.state.valorTotal
        let perc_pagador = this.state.perc_pagador;
        let perc_recebedor = this.state.perc_recebedor;
        
        let valorPagadorTotal = (parseFloat(this.props.custoTotal)*(perc_pagador/100))
        let valorRecebedorTotal  = (parseFloat(this.props.custoTotal)*(perc_recebedor/100))
        
        return (
            <div className="card-panel">
                <div class='row '>
                    <div className='col s12 m12'><h5>Proporcionalidade</h5></div>
                    <div class="col s12 m6">
                        <div class="input-field col s12">
                            <input placeholder="" id="p-renda-pagar" type="number" onChange={this.calculaValor} class="validate"/>
                            <label for="p-renda-pagar">Renda da pessoal que vai pagar</label>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="input-field col s12">
                        <input placeholder="" id="p-renda-receber" type="number" onChange={this.calculaValor}  class="validate"/>
                            <label for="p-renda-receber">Renda da pessoal que vai receber</label>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class="col s12 m6">
                        Porcentagem de responsabilidade pagador
                        <span class="resultado col s6">
                            {perc_pagador} %
                        </span>
                        <span class="resultado col s6">
                            R$ {valorPagadorTotal} 
                        </span>
                    </div>
                    <div class="col s12 m6">
                        Porcentagem de responsabilidade recebedor
                        <span class="resultado col s6">
                            {perc_recebedor} % 
                        </span>
                        <span class="resultado col s6">
                            R$ {valorRecebedorTotal}
                        </span>
                    </div>
                </div>
            </div>
        )
       
    }

 
}
export default Proporcionalidade