import {useState} from 'react';
function Form() {
function meuEvento(e) {
//para não dar load na página
e.preventDefault();
alert('Fui clicado pelo '+ nome);
}
const [nome, setNome] = useState();
return(
<div>
<h1> Meu Cadastro </h1>
<form onSubmit={meuEvento}>
<input type="text" placeholder="Digite seu nome"
onChange={(e)=> setNome(e.target.value)} />
<br/>
<input type="submit" value="Cadastrar" />
</form>
</div>
)
}
export default Form;