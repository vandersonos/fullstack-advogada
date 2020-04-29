import React from 'react';
// import M from "materialize-css";
import $ from 'jquery';

class DespesaItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // "DataSource" é uma fonte de dados global
            despesa: this.props.despesa,
            valor: this.props.valor
        };
    }
    componentDidMount() {
        // M.AutoInit();
    }
    render(){
        return (
            <div class='row'>
                <div class="input-field col s12 m6 l6">
                    <input id="item-valor" type="number" value='{this.state.valor}' class="validate"/>
                    <label for="item-valor">{this.state.despesa}</label>
                </div>
            </div>
        )
       
    }

 
}
export default DespesaItem