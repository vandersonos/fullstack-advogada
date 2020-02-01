import React from 'react';
class CardTopico extends React.Component{
    render(){
        let itens = [];
        for (const [key,value] of this.props.itens.entries()) {
            itens.push(<li key={key} className='collection-item'>{value}</li>);
        }
        let paragrafo = (
            <div className="col s12 m7 l7 xl6 offset-xl1 ">
                <h4  className="header">{this.props.titulo}</h4>
                <ul className='collection'>{itens}</ul>
            </div>
        );
        let imagem = (
            <div className="col s12 m5 l5 xl4 card-image">
                <img src={this.props.img} alt="" className="responsive-img" />
            </div>
        );
        return (
            <div className="col s12 m12 l12 xl12 card-topico" >
                <div id={this.props.id} className="section scrollspy">
                    
                    <div className="card hoverable grey lighten-5 z-depth-1">            
                        { this.props.alinhamento === 'left' &&
                            <div className="row card-topico-conteudo">
                            {imagem}
                            {paragrafo}
                            </div>
                        }
                         { this.props.alinhamento !== 'left' &&
                            <div className="row card-topico-conteudo">
                            {paragrafo}
                            {imagem}
                            </div>
                        }
                        <div className="card-action">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardTopico