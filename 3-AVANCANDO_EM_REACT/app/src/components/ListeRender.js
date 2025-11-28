import { useState } from "react";

const ListeRender = () => {
  const [list] = useState(["Mateus", "Pedro", "Josias", "Maria"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "Joao", age: 28 },
    { id: 3, name: "pedro", age: 44 },
  ]);

const deleteRandom = () => {
  const randomNumber = Math.floor(Math.random() * 4); //gera numeros aleatorio entre zero e 3

  setUsers((prevUsers) => {
    console.log(prevUsers);
    return prevUsers.filter((user) => randomNumber !== user.id);
  });
};

  return (
    <div>
      <ul>
        {list.map((item, i) => (
         <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>{/* tentar sempre usar uma chave unica */}
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}> CLIQUE AQUI PARA DELETAR </button>
    </div>
  );
};

export default ListeRender;
