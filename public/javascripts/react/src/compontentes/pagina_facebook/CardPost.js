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
            <div className="col s12 ">
                <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftaianemartinscosta%2Fposts%2F925351317896073&width=500"
                    width="500"
                    height="595"
                    // style="border:none;overflow:hidden"
                    scrolling="no"
                    frameborder="0"
                    allowTransparency="true"
                    allow="encrypted-media">
                </iframe>
           </div>
        );
        return (
            <div className="col s12 m12 l12 xl12 card-topico" >
                <div id={this.props.id} className="section scrollspy">
                    
                    <div className="card hoverable grey lighten-5 z-depth-1">            
                            <div className="row card-topico-conteudo">
                            {paragrafo}
                            </div>
                        
       
                    </div>
                </div>
            </div>
        )
    }
}
export default CardTopico