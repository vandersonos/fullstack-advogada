import React from 'react';
import $ from 'jquery';

class Contato extends React.Component{
    enviarMensagemWhatsapp(e){
        this.validaForm();
        const contatoNumber = encodeURIComponent('5553981119605');
        let nome = encodeURIComponent($('#nome').val());
        let telefone = encodeURIComponent($('#telefone').val());
        let msg = `Nome: ${nome}`;
        msg += ` Telefone: ${telefone}, `;
        msg +=  encodeURIComponent($('#mensagem').val()); //this.document.getElementById('icon_mensagem').value;
        let target = `https://api.whatsapp.com/send?phone=${contatoNumber}&text=${msg}`;
        window.open(target);
        
    }
    enviarMensagemEmail(){
        window.open('https://www.messenger.com/t/taianemartinscosta');
    }
    validaForm(){
        if($('#nome').val() === ''){
            alert('erro')
        }
        if($('#telefone').val() === ''){
            alert('erro')
        }

        if($('#mensagem').val() === ''){
            alert('erro')
        }
    }

    render(){
        return (
            <div className="col">
                <div id={this.props.id} className="section scrollspy">
                    <div className="card-panel grey lighten-5 z-depth-1">
                        <div className="row">                              
                            <form className="col s12 m6 form-contato">
                                    <div className="col s12">
                                        <h5 className="valign-wrapper">Contato</h5>
                                    </div>
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">account_circle</i>
                                        <label htmlFor="nome">Nome</label>
                                        <input id="nome" type="text" className="validate"/>
                                        
                                    </div>
                                    <div className="input-field col s12"><i className="material-icons prefix">phone</i>
                                        <input id="telefone" type="tel" className="validate"/>
                                        <label htmlFor="telefone">Telefone</label>
                                    </div>
                                    <div className="input-field col s12"><i className="material-icons prefix">question_answer</i>
                                        <textarea id="mensagem" className="materialize-textarea"></textarea>
                                        <label htmlFor="mensagem">Mensagem</label>
                                    </div>
                                </form>
                            <div className="form-contato-acoes col s12 m6">
                                <div className="col s12">
                                    <h6 className="valign-wrapper">Escolha abaixo a melhor forma de me contatar</h6>
                                </div>
                                <div className="input-field col s12">
                                    <div className='row'>
                                        <div className='col'><img src='img/whatsapp.png' alt='Icone do whatsapp'/></div>
                                        <div className='col'>
                                            <button className="btn waves-effect waves-light" onClick={(e) => this.enviarMensagemWhatsapp(e)}>
                                                Enviar whatsapp<i className="material-icons right hide-on-small-only">send</i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col s12 form-title-pagina-facebook">
                                    <h6 className="valign-wrapper">Ou acesse minha página no facebook</h6>
                                </div>
                                <div className="col s12">
                                    <div className='row'>
                                        <div className='col'>   
                                            <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/taianemartinscosta/'>
                                            <img src='img/facebook.png' alt='Icone do facebook'/>
                                            </a>
                                        
                                        </div>
                                        <div className='col'>
                                            <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/taianemartinscosta/'>
                                            <button className="btn waves-effect waves-light" >
                                                    Acessar página<i className="material-icons right  hide-on-small-only"></i>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contato
/*
<div className='row'>
                                        <div className='col'>
                                            <img src='img/email.png' alt='Icone do e-mail'/>
                                        </div>
                                        <div className='col'>
                                            <button className="btn waves-effect waves-light" onClick={(e) => this.enviarMensagemEmail(e)}>
                                                Enviar email<i className="material-icons right hide-on-small-only">send</i>
                                            </button>
                                        </div>
                                    </div>*/