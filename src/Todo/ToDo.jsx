import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);
    const [per, setPer] = useState();
    const [arma, setArma] = useState();
    const [arte, setArte] = useState();



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
                <Link to={`/detalhe/${ativ.id}`}>
                    <li>{ativ.album}</li>
                </Link>
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