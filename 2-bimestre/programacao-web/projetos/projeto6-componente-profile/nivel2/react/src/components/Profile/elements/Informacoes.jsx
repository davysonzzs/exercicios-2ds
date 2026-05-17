import icon from "../../../assets/calendar.png"
import icon2 from "../../../assets/briefcase.png"

export default function Informacoes({ nome, idade, profissao }){
    return(
        <>
        <h1>{nome}</h1>
        <div className="infos">
            <img src={icon} alt="icon calendario" />
            <p><strong>Idade</strong>: {idade} anos</p>
        </div>
        <div className="infos">
            <img src={icon2} alt="icon maleta" />
            <p><strong>Profissão</strong>: {profissao}</p>
        </div>
        </>
    )
}