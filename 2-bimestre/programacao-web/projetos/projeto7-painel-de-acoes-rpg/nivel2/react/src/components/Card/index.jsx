import Botao from "../Botao"
import './style.css'
import espada from '../../assets/espada.png'
import escudo from '../../assets/escudo.png'
import fugirIcon from '../../assets/fugir.png'

export default function Card({ classe, nivel, vida, experiencia, foto, children }){
    function atacar(){
        alert("Atacando o inimigo!")
    }
    function defendendo(){
        alert("Defendendo Posição!")
    }
    function fugir(){
        alert("Fugindo da batalha")
    }

    return(
        <div className="tudo-perfil">
            <div className="perfil">
                <div className="infos">
                        <img src={foto} />
                    <div className="atributos">
                        <h1>{children}</h1>
                        <p><span>Classe</span>: {classe}</p> <br />
                        <p><span>Nível</span>: {nivel}</p> <br />
                        <p><span>vida</span>: {vida}</p> <br />
                        <p><span>Experiência</span>: {experiencia}</p>
                    </div>
                </div>
                <div className="butao">
                    <Botao texto={"Atacar"} onClick={atacar} cor={"red"} img={espada}/>
                    <Botao texto={"Defender"} onClick={defendendo} cor={"Blue"} img={escudo}/>
                    <Botao texto={"Fugir"} onClick={fugir} cor={"Green"} img={fugirIcon}/>
                </div>
            </div>
        </div>
    )
}