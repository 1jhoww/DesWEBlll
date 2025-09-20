function Produto(props)
{
   return(
      <div>
       <h2>{props.nome}</h2>
       <img src={props.foto} height="100px" width="100px"/>
       <p>Descrição: {props.desc}</p>
      </div>
    )
}
export default Produto;