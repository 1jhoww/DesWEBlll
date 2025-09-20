import logo from './logo.svg';
import './App.css';
import Frases from './components/Frases';
import Produto from './components/Produto';
import Lista from './components/Lista';
import Form from './components/Form';
import Evento from './components/Evento';
import Condicional2 from './components/Conditional2';
import Condicional from './components/Conditional';
import Lista2 from './components/Lista2';
import {useState} from 'react';
import Saudacao from './components/Saudacao';
import SeuNome from './components/Seunome';


function App() {
  const nomi = "Jhow"
  //Método JS pra deixar tudo maiúsculo
  const novo = nomi.toUpperCase();
  const url = "https://placehold.co/150";
  const meusItens=['PHP', 'NodeJs', 'JavaScript','React'];
  const [nome, setNome] = useState();
  


  function soma(a,b){
    return a+b;
  }
  return (
    <div className="App">
      <h1>Meu primeiro App</h1>
      <p> Olá, {nomi}</p>
      <p>Soma : {soma(2,6)}</p>
      <img src={url} alt='Minha Imagem' />
      <Frases/>
      <Produto
       nome="Caneca"
       foto="https://cdn.pixabay.com/photo/2012/04/28/18/16/beer-mug43844_960_720.png"
       desc="Uma caneca bem interessante"
     />
     <Lista/>
     <Form/>
     <Evento/>
     <Condicional2/>
     <Condicional/>
     <h1> Renderizando Listas</h1>
     <Lista2 itens={meusItens}/>
     < Lista2 itens={[]}/>
     
     <SeuNome setNome={setNome}/>
     <Saudacao nome={nome}/>
       
    </div>
  );
}

export default App;
