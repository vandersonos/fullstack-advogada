import React from 'react';
import M from "materialize-css";
import $ from 'jquery';

class CustosColetivos extends React.Component{
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        let lista = props.lista
        this.addItem = this.addItem.bind(this);
        this.rmItem = this.rmItem.bind(this);
        this.state = {
            // "DataSource" é uma fonte de dados global
            lista: lista,
            total: this.props.totalColetivo,
            nr_pessoas:1
        };
    }
    componentDidMount() {
        this.nrItens = 0
        M.AutoInit();
    }
    rmItem(e){
        let lista = this.state.lista;
        let id = $(e.target).prop('id')
        let nr_pessoas = $('#cc_nr_pessoas').val()
        lista = lista.filter( function(item){ 
            
            return item.id !== id
        })
        
        let valor = lista.reduce((acumulador, i)=>{
            return acumulador + i.valor;
        },0)
        this.setState({lista: lista})
        this.setState({lista: lista, total: valor/nr_pessoas})
        this.props.onTotalColetivoChange(valor/nr_pessoas);
    }
    addItem(){
        let lista = this.state.lista;
        let nr_pessoas = $('#cc_nr_pessoas').val()
        if(!nr_pessoas){
            nr_pessoas = 1
            $('#cc_nr_pessoas').val(1)
        }
        let o = {
            id: "cc_"+lista.length+1,
            item: $('#cc_item-despesa').val(),
            valor: parseInt($('#cc_item-valor').val())
        }
         if(!o.item || !o.valor){
            return;
        }
        lista.push(o)
        $('#cc_item-despesa').val('');
        $('#cc_item-valor').val('');
        let valor = parseFloat(this.state.total) + (o.valor/nr_pessoas)
        valor = valor.toFixed(2).replace('.',',')
        this.setState({lista: lista, total: valor, nr_pessoas:nr_pessoas})
        this.props.onTotalColetivoChange(valor);
    }
    render(){
        let itens = [];
        for (const [index, value] of this.state.lista.entries()) {
            let valor = value.valor
            itens.push(
                <tr data-key={value.id}>
                    <td>{value.item}</td>
                    <td>{valor.toFixed(2).replace('.',',')}</td>
                    <td>
                        <a class="btn-floating btn-small waves-effect waves-light red" onClick={this.rmItem}>
                        <i id={value.id} class="material-icons">remove</i>
                        </a>
                    </td>
                </tr>
            );
        }
        let total = parseFloat(this.state.total)
        return (
            <div  className="card-panel">
                <div id="modal-help-gcoletivo" class="modal">
                    <div class="modal-content">
                    <h6>Gastos coletivos</h6>
                    <p>
                        Aqui você vai discriminar somente os gastos coletivos de todas as pessoas da moradia, por exemplo: Aluguel, luz, água, etc.
                        <br></br>
                        Estes gastos são divididos pelo número de moradores da casa, para o calculo do valor proporcional de cada morador e por consequencia o gasto individual do beneficiado.
                    </p>
                    </div>
                    <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect  btn-small">ok</a>
                    </div>
                </div>
                <div class="row">
                    <div className='col'>
                        <h6>Gastos coletivos dos moradores da residência
                            <a class="waves-effect waves-light btn-help modal-trigger" href="#modal-help-gcoletivo">
                                <i class="material-icons">info</i>
                            </a>
                        </h6>
                    </div>
                </div>
                <div class="row"> 
                    <div class="input-field col s12">
                        <input placeholder="" id="cc_nr_pessoas" type="text" class="validate"/>
                        <label for="nr_pessoas">Quantas pessoas moram na residência?</label>
                    </div>
                    <div class="input-field col s12 forms-table">
                        <input placeholder="" id="cc_item-despesa" type="text" class="validate"/>
                        <label for="item-despesa">Descricão da despesa</label>
                    </div>
                    <div class="input-field col s8 m4 l10 forms-table">
                        <input id="cc_item-valor" type="number" class="validate"/>
                        <label for="item-valor">Valor da despesa</label>
                       
                    </div>
                    <div class="input-field col s4 m4 l2 forms-table">
                        <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.addItem} ><i class="material-icons">add</i></a>
                    </div>
                </div>
                <div class='row' >
                   <table class='responsive-table highlight'>
                        <thead>
                        <tr>
                            <th>Despesa</th>
                            <th>Valor</th>
                            <th></th>
                        </tr>
                        </thead>

                        <tbody id='table-custos-individuais'>
                        {itens}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan='2'>Total Gasto Individuais do Beneficiado</td>
                                <td>R$ {total.toFixed(2).replace('.', ',')}</td>
                                
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
       
    }
}
export default CustosColetivos