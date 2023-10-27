import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";

export default function ToDo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [lista, setLista] = useState(listaLocalStorage || []);
    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);
    const [per, setPer] = useState();
    const [arma, setArma] = useState();
    const [arte, setArte] = useState();

    useEffect(() =>{
      localStorage.setItem("lista", JSON.stringify(lista)) }, [lista]);
    

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            id: id,
            per: per,
            arma: arma
        }]);
        setId(id + 1);
        setAtividade("");
    };
    const remover = (id) => {
        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }
    return (
        <div class="container">
            <Link to="/">home</Link>
            <h1>Genshin Build</h1>
            <form onSubmit={salvar}>
                
            <h3>Personagem: </h3>
                <input type="text"
                    value={per}
                    onChange={(e) => { setPer(e.target.value) }} />

                <h3>Arma: </h3>
                <input type="text"
                    value={arma}
                    onChange={(e) => { setArma(e.target.value) }} />
                
                <h3>Artefato: </h3>
                <input type="text"
                    value={arte}
                    onChange={(e) => { setArte(e.target.value) }} />

                <button>ADICIONAR</button>

            </form>

            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li> 
                        <p>Personagem: {ativ.per}</p>
                        <p>Arma: {ativ.arma}</p>
                        <p>Artefato: {ativ.arte}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}