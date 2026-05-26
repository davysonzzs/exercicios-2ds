import './style.css'
import enviarIcon from '../../assets/enviar.png'

export default function FormularioMensagem(){
    const enviarMensagem = (event) =>{
        event.preventDefault()
        const nome = document.getElementById("Nome").value
        const mensagem = document.getElementById("mensagem").value
        alert(`Mensagem enviada por: ${nome}, msg: ${mensagem}`)
    }
    return(
        <div className="formulario">
            <h1>Formulário De Mensagem</h1>
            <form onSubmit={enviarMensagem}>
                <div className='Inputs'>
                <label>Nome: </label> <input type="text" placeholder="Digite seu Nome" id="Nome"/>
                </div>
                <div className='Inputs'>
                <label>Mensagem: </label> <textarea placeholder="Digite sua mensagem" id="mensagem"/>
                </div>
                <div className='butao'>
                    <button id='butaoElement' type="submit"><img src={enviarIcon} id='imgEnviar'/>Enviar Mensagem</button>
                </div>
                
            </form>
        </div>
    )
}