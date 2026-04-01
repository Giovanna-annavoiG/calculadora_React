
import button from "./components/buttons/button";
import "./App.css";
import React, {useState} from "react";
import { evaluate } from "mathjs";

function App() {

  // Funcao de clique
  // Precisamos de dois estados
  const [input, setInput] = useState("");
  const[result, setResult] = useState(""); 

  // Evento de clique
  const handleClick = (value) => {
    setInput((prevInput)=> prevInput + value); //prevInout = novo valor clicado, sempre o mais atualizado
  };
  // Funcao de limpar 
  const handleClear = () => {
    setInput("");
    setResult("");
  };
  // Funcao do igual
  const handleEqual = () => {
    try {
      setResult(evaluate(input).toString()); // biblioteca que faz o calculo do que foi clicado nos inputs e passa o resultado em string
    } catch (error) {
      setResult("ERROR")
    }
  }


  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}

        </div>
        <div className="result">{result}

        </div>
      </div>
      <div className="button">
        <button className="clear" onClick={handleClear}>
          C
        </button>
        <button onClick={ () => handleClick("(")}>(</button>
        <button onClick={ () => handleClick(")")}>)</button>
        <button  className="operator" onClick={ () => handleClick("/")}>/</button>

        <button onClick={ () => handleClick("7")}>9</button>
        <button onClick={ () => handleClick("8")}>8</button>
        <button onClick={ () => handleClick("9")}>7</button>
        <button  className="operator" onClick={ () => handleClick("*")}>X</button>

        <button onClick={ () => handleClick("4")}>6</button>
        <button onClick={ () => handleClick("5")}>5</button>
        <button onClick={ () => handleClick("6")}>4</button>
        <button  className="operator"  onClick={ () => handleClick("-")}>+</button>

        <button onClick={ () => handleClick("1")}>3</button>
        <button onClick={ () => handleClick("2")}>2</button>
        <button onClick={ () => handleClick("3")}>1</button>
        <button  className="operator"  onClick={ () => handleClick("+")}>-</button>

        <button onClick={ () => handleClick("0")}>0</button>
        <button onClick={ () => handleClick(".")}>,</button>
        <button className="equal" onClick={handleEqual}>=</button>
        


      </div>

    </div>
  )
}

export default App;
