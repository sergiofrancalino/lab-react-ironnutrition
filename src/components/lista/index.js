// Interation 1 - Render a Simple List

function Lista (props){
    
    return (
        <div>
          <img src={props.imagem} alt="Type of food" width={200}/>
          <p>{props.nome}</p>
        </div>
    ) 
}
export default Lista
