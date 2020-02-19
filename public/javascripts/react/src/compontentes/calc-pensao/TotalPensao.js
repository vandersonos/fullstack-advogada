import React from 'react';
import M from "materialize-css";
import $ from 'jquery';

class TotalPensao extends React.Component{
    // constructor(props) {
    //     super(props);
 
    //     this.state = {
    //         // "DataSource" é uma fonte de dados global
    //         custoTotal: props.valor
    //     };

    // }
    componentDidMount() {
        M.AutoInit();
    }

    render(){
        return (
            <div className="card-panel">
                <div class='row'>
                    <div class='col s12 m6'>
                        <b>Valor estimado da pensão</b>
                    </div>
                    <div class='col s12 m6'>
                    <span class="resultado">
                                R$ {this.props.valor} 
                            </span>
                    </div>
                </div>
            </div>
        )
       
    }

 
}
export default TotalPensao