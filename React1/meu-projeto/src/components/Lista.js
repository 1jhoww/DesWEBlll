import Item from './Item'
function Lista(){
return (
<>
<h1> Minha Lista </h1>
<ul>
<Item marca="Ferrari" ano={1985} />
<Item marca="Fiat" ano={1999} />
<Item marca="Volkswagen" ano={2001} />
<Item marca="Renault" ano={2003} />
<Item />
</ul>
</>
)
}
export default Lista;