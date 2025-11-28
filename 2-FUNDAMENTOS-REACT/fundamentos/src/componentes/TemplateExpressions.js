//colocando html no javascript

const TemplateExpresions = ()=>{
    const name="Gabriel";

    const data = {
        idade: 21,
        job: "programador",
    };

    return(
    <div>
        <h1>mehor cavalo do mundo é de: {name}</h1>
        <p>Profissao: {data.job}</p>
    </div>

    );
};

export default TemplateExpresions;

