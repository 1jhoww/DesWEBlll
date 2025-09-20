import {useState} from 'react';
function Condicional2(){
const [idade, setIdade] = useState();
return(
<div>
<h2>Programa da idade</h2>
<form>
<input type="number"
placeholder="Digite sua idade"
onChange={ (e) => setIdade(e.target.value)}
/>
{idade>=18 &&
<h2>
Você é Maior.
</h2>
}
</form>
</div>
);
}
export default Condicional2;