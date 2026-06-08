import { useState, useRef } from "react";
export default function FormularioPersonagem({ enviarPersonagem }) {
    const [ nome, setNome ] = useState("")
    const [ classe, setClasse ] = useState("")
    const input1Ref = useRef(null)
    const input2Ref = useRef(null)
    
    function enviar(e){
        const novoPersonagem = {
            nome: nome,
            classe: classe
        }
        enviarPersonagem(personagensAnteriores => [...personagensAnteriores, novoPersonagem])
        input1Ref.current.value = ""
        input2Ref.current.value = ""
        input1Ref.current.focus()
    }
    return(
        <div className="formulario">
            <form action={enviar}>
                <label>Nome</label> <br />
                <input type="text" ref={input1Ref} onChange={e => setNome(e.target.value)}/> <br />
                <label>Classe</label> <br />
                <input type="text" ref={input2Ref} onChange={e => setClasse(e.target.value)}/> <br />
                <button type="submit">Cadastrar Personagem</button>
            </form>
        </div>
    )

}