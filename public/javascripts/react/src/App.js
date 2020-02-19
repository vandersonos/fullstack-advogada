import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import CardCartaoVisita from './compontentes/CardCartaoVisita';
import CardTopico from './compontentes/CardTopico.js';
import Navbar from './compontentes/NavBar.js';
import Contato from './compontentes/Contato.js';
import CalculadoraPensao from './compontentes/calc-pensao/CalculadoraPensao.js';


function App() {
    let artigos = [
        {
            titulo:'Divórcio',
            id:'divorcio',
            img:'img/divorcio.jpg',
            texto: "",
            itens:[
                    "Divórcio Judicial",
                    "Divórcio Extrajudicial",
                    "Dissolução de União Estável Consensual",
                    "Dissolução de União Estável Litigiosa"
            ]
        },
        {
            id:'guarda',
            titulo:'Guarda',
            img:'img/guarda.jpg',
            texto: "",
            itens:[
                    "Guarda Provisória",
                    "Guarda Alternada",
                    "Guarda Compartilhada",
                    "Guarda Unilateral"
            ]
        
        },
        {
            id:'pensao',
            titulo:'Pensão de Alimentos',
            img:'img/pensao-alimenticia.jpg',
            itens:[
                "Ação de Alimentos",
                "Ação de Regualação de Visitas"
            ],
            texto:""
        }
    ];
    let itens = [];
     for (let [key,value] of artigos.entries()) {
        itens.push(<CardTopico key={key} id={value.id} alinhamento='left' titulo={value.titulo} texto={value.texto} img={value.img} itens={value.itens}/>);
    }
    return (
    <div className="App ">
        <Navbar artigos={artigos}/>
        <div className='container row'>
            <CardCartaoVisita id='sobre' />
            <CalculadoraPensao/>
        </div>
    </div>
  );
}

export default App;
