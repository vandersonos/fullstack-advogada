import React from 'react';
import M from "materialize-css";
import $ from 'jquery';

class Navbar extends React.Component{
    
    componentDidMount() {
        M.AutoInit();
    }
    escondeMenu(){
        $(".sidenav-overlay").trigger("click");
        return false; 
    }
    render(){
        let itens = [];
        for (const [key,value] of this.props.artigos.entries()) {
            let url = '/#'+value.id;
            itens.push(<li key={key}><a onClick={this.escondeMenu} href={url}>{value.titulo}</a></li>);
        }
        let servicos = <ul id='dropdownservicos' class='dropdown-content'> {itens} </ul>
        let itensferramentas = <li><a onClick={this.escondeMenu} href='/calculadora-pensao-alimenticia'>Calculadora de pensão</a></li>
        let ferramentas = <ul id='dropdownferramentas' class='dropdown-content'>{itensferramentas}</ul>
        return (
            <div >
                {servicos}
                {ferramentas}
                <nav>
                    <div className="nav-wrapper container">
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="left hide-on-med-and-down ">
                            <li><a onClick={this.escondeMenu} href="/"><i class="material-icons left">home</i>Início</a></li>
                            <li><a onClick={this.escondeMenu} href="/#sobre">Sobre</a></li>
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdownservicos">Servicos<i class="material-icons right">arrow_drop_down</i></a></li>
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdownferramentas">Ferramentas<i class="material-icons right">arrow_drop_down</i></a></li>
                            <li><a onClick={this.escondeMenu} href="/#contato">Contato</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav section table-of-contents" id="mobile-demo">
                    <li><a onClick={this.escondeMenu} href="/"><i class="material-icons left">home</i>Início</a></li>
                    <li><a onClick={this.escondeMenu} href="/#sobre">Sobre</a></li>
                     <li><a onClick={this.escondeMenu} href="/#contato">Contato</a></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader"><i class="material-icons">business_center</i>Servicos</a></li>
                    {itens}
                    <li><div class="divider"></div></li>
                    <li><a class="subheader"><i class="material-icons">build</i>Ferramentas</a></li>
                    {itensferramentas}
                </ul>
            </div>
        )
       
    }
}
export default Navbar