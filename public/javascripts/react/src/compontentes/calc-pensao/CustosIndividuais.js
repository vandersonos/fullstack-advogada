import React from 'react';
// import M from "materialize-css";
import $ from 'jquery';

class CustosIndividuais extends React.Component{
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        let lista = []
        this.calcula = this.calcula.bind(this);
        this.state = {
            // "DataSource" é uma fonte de dados global
            lista: lista,
            total: this.props.totalIndividual,
            nr_moradores:1
        };
    }
    componentDidMount() {
        this.nrItens = 0
        // M.AutoInit();
    }
    calcula(){
        let lista = [
            $('item-internet').val(),
            $('item-plano-saude').val(),
            $('item-mensalidade-escolar').val(),
            $('item-material-escolar').val(),
            $('item-lazer').val(),
            $('item-vestuario').val(),
            $('item-remedio').val()
        ];
        let valor = lista.reduce((acumulador, i)=>{
            return acumulador + i.valor;
        },0)
        console.log(valor,'valor', lista)
        this.setState({lista: lista, total: valor.toFixed(2)})
        this.props.onTotalIndividualChange(valor);
    }   
    render(){
        return (
            <div className="card card-panel  p-4 mt-4">
                <div id="modal-help-gindividual" className="modal">
                    <div className="modal-content">
                    <h6>Gastos individuais</h6>
                    <p>Aqui você deve discriminar somente os gastos individuais do beneficiado, como por exemplo: Educação, saúde, alimentos, vestuário, lazer entre outros.</p>
                    </div>
                    <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect btn-small">ok</a>
                    </div>
                </div>
                <div className='row'>
                    <h6>Gastos individuais do beneficiado 
                        <a className="waves-effect waves-light btn-help modal-trigger" href="#modal-help-gindividual">
                            <i className="material-icons">info</i>
                        </a>
                    </h6>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-internet">Higiene</label>
                        <input id="item-internet" type="number" className="form-control"/> 
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-plano-saude">Plano de saúde</label>
                        <input id="item-plano-saude" type="number" className="form-control"/> 
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-mensalidade-escolar">Mensalidade escolar</label>
                        <input id="item-mensalidade-escolar" type="number" className="form-control"/> 
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-material-escolar">Material escolar</label>
                        <input id="item-material-escolar" type="number" className="form-control"/> 
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-lazer">Lazer</label>
                        <input id="item-lazer" type="number" className="form-control"/> 
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-vestuario">Vestuáio</label>
                        <input id="item-vestuario" type="number" className="form-control"/> 
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-remedio">Remédios</label>
                        <input id="item-remedio" type="number" className="form-control"/> 
                    </div>
                </div>
                <div className='row' >
                    <span >Total Gasto Individuais</span>
                    <span>R$ {this.state.total}</span> 
                </div>
            </div>
        )
       
    }
}
export default CustosIndividuais