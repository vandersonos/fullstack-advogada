import React from 'react';
import M from "materialize-css";
import './FeedPaginaFacebook.css';
import CardPost from './CardPost.js';
import Navbar from '../NavBar.js';
import Posts from './CollPublicacoes.js';
import Artigos from '../CollArtigos.js';
function App() {
    let itens = [];
     for (let [key,value] of Artigos.entries()) {
        itens.push(<CardPost key={key} id={value.id} alinhamento='left' titulo={value.titulo} texto={value.texto} img={value.img} itens={value.itens} links={value.links}/>);
    }
    return (
        <div className="App ">
            <Navbar artigos={Artigos}/>
            <div className='container row'>
                {itens}
            </div>
        </div>
    );
}

export default App;
