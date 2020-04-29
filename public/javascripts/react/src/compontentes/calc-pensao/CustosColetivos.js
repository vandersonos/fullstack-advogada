import React from 'react';
// import M from "materialize-css";
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
        // M.AutoInit();
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
        
        let total = parseFloat(this.state.total)
        return (
            <div  className="card card-panel  p-4 mt-4">
                <div id="modal-help-gcoletivo" className="modal">
                    <div className="modal-content">
                    <h6>Gastos coletivos</h6>
                    <p>
                        Aqui você vai discriminar somente os gastos coletivos de todas as pessoas da moradia, por exemplo: Aluguel, luz, água, etc.
                        <br></br>
                        Estes gastos são divididos pelo número de moradores da casa, para o cálculo do valor proporcional de cada morador e por consequência o gasto individual do beneficiado.
                    </p>
                    </div>
                    <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect  btn-small">ok</a>
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <h6>Gastos coletivos dos moradores da residência
                            <a className="waves-effect waves-light btn-help modal-trigger" href="#modal-help-gcoletivo">
                                <i className="material-icons">info</i>
                            </a>
                        </h6>
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="nr_pessoas">Quantas pessoas moram na residência?</label>
                        <input placeholder="" id="cc_nr_pessoas" type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-aluguel">Aluguel</label>
                        <input id="item-aluguel" type="number" onChange={this.calcula} className="form-control"/> 
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-condominio">Condomínio</label>
                        <input id="item-condominio" type="number" onChange={this.calcula} className="form-control"/> 
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-luz">Luz</label>
                        <input id="item-luz" type="number" onChange={this.calcula} className="form-control"/> 
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-agua">Água</label>
                        <input id="item-agua" type="number" onChange={this.calcula} className="form-control"/> 
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
                        <label htmlFor="item-internet">Internet/Telefone</label>
                        <input id="item-internet" type="number" onChange={this.calcula} className="form-control"/> 
                    </div>
                </div>
                
                
                <div className='row' >
                    <span>Total Gastos Individuais do Beneficiado</span>
                    <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
            </div>
        )
       
    }
}
export default CustosColetivos