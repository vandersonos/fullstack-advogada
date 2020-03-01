import React from 'react';
import { Link } from 'react-router-dom'
class CardTopico extends React.Component{
    render(){
        let itens = [];
        for (const [key,value] of this.props.itens.entries()) {
            itens.push(<li key={key} className='collection-item'>{value}</li>);
        }
        let links = [];
        if(this.props.links){        
            for(const [key, value] of this.props.links.entries()){
                links.push(
                    <li key={key} className='collection-item'>
                        <Link className="waves-effect waves-light btn" key={key} to={value.url}><i class="small material-icons left">keyboard</i>{value.title}</Link>
                    </li>
                )
            }
        }
        
        let paragrafo = (
            <div className="col s12 m7 l7 xl6 offset-xl1 ">
                <h4  className="header">{this.props.titulo}</h4>
                <ul className='collection'>{itens}{links}</ul>
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