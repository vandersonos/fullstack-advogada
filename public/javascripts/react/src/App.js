import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import CardCartaoVisita from './compontentes/CardCartaoVisita';
import CardTopico from './compontentes/CardTopico.js';
import Navbar from './compontentes/NavBar.js';
import Contato from './compontentes/Contato.js';
// import CalculadoraPensao from './compontentes/calc-pensao/CalculadoraPensao.js';


function App() {
    let artigos = [
        {
            titulo:'Divórcio',
            id:'divorcio',
            img:'img/divorcio.jpg',
            texto: "",
            itens:[
                    "Divórcio Judicial Litigioso",
                    "Divórcio Judicial Consensual",
                    "Dissolução de União Estável",
                    "Anulação de Casamento"
            ]
        },
        {
            id:'guarda',
            titulo:'Guarda',
            img:'img/guarda.jpg',
            texto: "",
            itens:[
                    "Guarda Provisória",
                    "Regulamentação de Visitas",
                    "Busca e Apreensão de crianças e adolescentes",
                    "Alteração de Guarda"
            ]
        
        },
        {
            id:'pensao',
            titulo:'Pensão Alimentícia',
            img:'img/pensao-alimenticia.jpg',
            itens:[
                "Proposição e/ou contestação",
                "Investigação de paternidade",
                "Negatória de Paternidade",
                "Execução de Alimentos (pena de prisão/ penhora)"
            ],
            texto:""
        },
        {
            id:'inventario',
            titulo:'Inventário',
            img:'img/inventario.jpg',
            itens:[
                "Abertura de testamento",
                "Remoção de Inventariante",
                "Habilitação de Herdeiros",
                "Nulidade de Testamento"
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
            {itens}
            <Contato id='contato'/>
        </div>
    </div>
  );
}

export default App;
