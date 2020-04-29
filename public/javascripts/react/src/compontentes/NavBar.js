import React from 'react';
//import M from "materialize-css";
import $ from 'jquery';

class Navbar extends React.Component{
    
    componentDidMount() {
        //M.AutoInit();
    }
    escondeMenu(){
        $(".sidenav-overlay").trigger("click");
        return false; 
    }
    render(){
        let itens = [];
        for (const [key,value] of this.props.artigos.entries()) {
            let url = '/#'+value.id;
            itens.push(<li key={key} className="nav-item"><a className="nav-link" onClick={this.escondeMenu} href={url}>{value.titulo}</a></li>);
        }
        let itensferramentas = <a  className="dropdown-item" onClick={this.escondeMenu} href='/calculadora-pensao-alimenticia'>Calculadora de pensão</a>
        return (
            <nav className="navbar navbar-expand-lg navbar-light px-5">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse container" id="navbarSupportedContent mx-5">
                    <ul className="navbar-nav mr-auto"> 
                        <li className="nav-item"><a  className="nav-link"  href="/">Início</a></li>                       
                        <li className='nav-item'><a  className='nav-link' onClick={this.escondeMenu} href="/#sobre">Sobre</a></li>
                        <li className='nav-item'><a className="nav-link" href="/feed-pagina-facebook" >Postagens</a></li>
                        <li className='nav-item'><a className='nav-link' onClick={this.escondeMenu} href="/#contato">Contato</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ferramentas
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {itensferramentas}
                            </div>
                        </li>
                    </ul>
                </div>

                </nav>
  
        )
       
       
    }
}
export default Navbar