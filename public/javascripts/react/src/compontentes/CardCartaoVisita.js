import React from 'react';

class CardCartaoVisita extends React.Component{
    
    render(){
        return (
            <div className="col s12 m12 l12 ">
                <div id={this.props.id} className="section scrollspy">
                    <div className="card-panel hoverable  lighten-5 z-depth-1 cartaoVisita">
                        <div className="row">
                            <div className="col s12 m4 fotoCartao">
                                <img src="img/taiane_perfil.jpeg" alt="" className="circle responsive-img" />
                            </div>
                            <div className="col s12 m8 textoCartao">
                                <span className="nome">Taiane Martins Costa</span>
                                <p className="black-text intro-pessoal" >
                                    Advogada Especialista em Direito Civil e Processo Civil, que atua na área de Direito de Família. <br/>
                                    Trabalha prestando suporte jurídico e serviço de correspondência em Pelotas e região.
                                </p>
                            </div>
         
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardCartaoVisita