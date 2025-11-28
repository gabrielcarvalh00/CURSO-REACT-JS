const Container = ({ children , test, test2}) => {
  return (
    <div>
      <h2>Este é o título do container</h2>
      <h2>{test}</h2>

       <h2>Esse e o segundo titulo do conatiner</h2>
       <h2>{test2}</h2>
        {children}
    </div>
  );
};

export default Container;
