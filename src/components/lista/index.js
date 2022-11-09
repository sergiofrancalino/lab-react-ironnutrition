function Lista (props){
    
    return (
        <div>
          <p>{props.nome}</p>
          {/* <p>{props.calorias}</p> */} 
          <img src={props.imagem} alt = "..." width={80}/>
        </div>
    ) 

}
export default Lista
