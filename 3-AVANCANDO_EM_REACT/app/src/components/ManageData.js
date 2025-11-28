import React from 'react'
import { useState } from 'react'


const ManageData = () => {
    let SomeData=10;

    const [number, Setnumber]=useState(10);

    //console.log(SomeData)

    console.log(number)




  return (
     <div>
        <p>SomeData: {SomeData}
        <button onClick={() => {SomeData=15}}>Muda a Variavel</button> {/* A cada clique altero o valor da variavel para 10*/}
         </p>
            
            <div>
                <p>Valor:{number}</p>
                <button onClick={() => {Setnumber(25)}} >Botao com usestate</button> {/* essa funcao aponta para o number*/}
            </div>
     </div>
  )
}

export default ManageData;