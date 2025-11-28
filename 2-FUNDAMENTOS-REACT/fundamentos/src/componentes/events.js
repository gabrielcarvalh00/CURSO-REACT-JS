const Events=() => {
  
    const HandleMyEvent=(e)=>{
         console.log(e);
         console.log("clicou");

    }

    const renderSomething = (e) => {
      if(e){
        return <h1>A condicao foi verdadeira</h1>
      }
      else{
        return <h1>A condicao foi falsa</h1>
      }
      
    }

  return(
   <div>
    <div>
        <button onClick={HandleMyEvent}>botao</button>
    </div>

    <div>
      <button onClick={()=> console.log("tudo junto") }>
        novobotao
      </button>
    </div>
    {renderSomething(true)}
    {renderSomething(false)}
   </div>

  );

};

export default Events;