import Foto from "./elements/Foto";
import Informacoes from "./elements/Informacoes";
import "../../styles/ProfileCSS.css"

export default function Profile({ foto, nome, idade, profissao }){
    return(
        <div className="Profile-card">
            <Foto foto={foto} />
            <Informacoes nome={nome} idade={idade} profissao={profissao} />
        </div>
    )

}