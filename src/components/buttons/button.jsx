//   sintaxe base de um componente react 
// const button = () =>{
// return{
        // o que aparece na tela 
    //}
// }


import "./button.css";

const button = ({ children, onClick, className }) => {
    return(
        <button className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default button;