import React from 'react';
import M from "materialize-css";
import $ from 'jquery';

class CustosIndividuais extends React.Component{
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        let lista = props.lista
        this.addItem = this.addItem.bind(this);
        this.rmItem = this.rmItem.bind(this);
        this.state = {
            // "DataSource" é uma fonte de dados global
            lista: lista,
            total: this.props.totalIndividual,
            nr_moradores:1
        };
    }
    componentDidMount() {
        this.nrItens = 0
        M.AutoInit();
    }
    rmItem(e){
        let lista = this.state.lista;
        let id = $(e.target).prop('id')
        lista = lista.filter( function(item){ 
            
            return item.id !== id
        })
        
        let valor = lista.reduce((acumulador, i)=>{
            return acumulador + i.valor;
        },0)
        console.log(valor,'valor', lista)
        this.setState({lista: lista, total: valor.toFixed(2)})
        this.props.onTotalIndividualChange(valor);
    }
      addItem(){
        let lista = this.state.lista;
        let o = {
            id: "ci_"+(lista.length+1),
            item: $('#item-despesa').val(),
            valor: parseFloat($('#item-valor').val())
        }
        $('#item-despesa').val('');
        $('#item-valor').val('');
        if(!o.item || !o.valor){
            return;
        }
        lista.push(o)
        let valor = parseFloat(this.state.total) + o.valor
        this.setState({lista: lista, total: valor.toFixed(2).replace('.',',')})
        this.props.onTotalIndividualChange(valor);
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
        return (
            <div className="card-panel">
                <div className='row'><h5>Gastos individuais do beneficiado</h5></div>
                <div class="row forms-table">
                    <div class="input-field col s12 m12 l6">
                        <input placeholder="" id="item-despesa" type="text" class="validate"/>
                        <label for="item-despesa">Descricão da despesa</label>
                    </div>
                    <div class="input-field col s8 m10 l4">
                        <input id="item-valor" type="number" class="validate"/>
                        <label for="item-valor">Valor da despesa</label>
                    
                    </div>
                    <div class="input-field col s4 m2 l2">
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
                                
                                <td colspan='2'>Total Gasto Individuais</td>
                                <td>R$ {this.state.total}</td> 
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
       
    }
}
export default CustosIndividuais