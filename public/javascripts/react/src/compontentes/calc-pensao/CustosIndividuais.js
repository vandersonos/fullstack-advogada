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
            total: 0,
            nr_moradores:1
        };
    }
    componentDidMount() {
        this.nrItens = 0
        M.AutoInit();
    }
    rmItem(e){
        let lista = this.state.lista;
        let id = parseInt($(e.target).prop('id'))
        lista = lista.filter( function(item){ 
            
            return item.id !== id
        })
        this.setState({lista: lista})
    }
      addItem(){
        let lista = this.state.lista;
        let o = {
            id: "cc_"+lista.length+1,
            item: $('#item-despesa').val(),
            valor: parseInt($('#item-valor').val())
        }
        lista.push(o)
        let valor = parseFloat(this.state.total) + o.valor
        this.setState({lista: lista, total: valor.toFixed(2)})
    }
    render(){
        let itens = [];
        for (const [index, value] of this.state.lista.entries()) {
            itens.push(
                <tr data-key={value.id}>
                    <td>{value.item}</td>
                    <td>{value.valor}</td>
                    <td>
                        <a class="btn-floating btn-small waves-effect waves-light red" onClick={this.rmItem}>
                        <i id={value.id} class="material-icons">remove</i>
                        </a>
                    </td>
                </tr>
            );
        }
        return (
            <div >
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="" id="item-despesa" type="text" class="validate"/>
                        <label for="item-despesa">Descricão</label>
                    </div>
                    <div class="input-field col s4">
                        <input id="item-valor" type="number" class="validate"/>
                        <label for="item-valor">Valor</label>
                       
                    </div>
                    <div class="input-field col s2">
                        <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.addItem} ><i class="material-icons">add</i></a>
                    </div>
                </div>
                <div class='row' >
                   <table class='responsive-table highlight'>
                        <thead>
                        <tr>
                            <th>Item</th>
                            <th>Valor</th>
                            <th></th>
                        </tr>
                        </thead>

                        <tbody id='table-custos-individuais'>
                        {itens}
                        </tbody>
                    </table>
                    <tfoot>
                        <tr>
                            
                            <th scope="row">Total Gasto Individuais</th>
                            <td>{this.state.total}</td>
                            <th></th>
                        </tr>
                    </tfoot>
                </div>
            </div>
        )
       
    }
}
export default CustosIndividuais