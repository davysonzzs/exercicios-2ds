import Foto from "./elements/Foto";
import Informacoes from "./elements/Informacoes";
import "../../styles/ProfileCSS.css"
import footerFoto from "../../assets/59045.png"

export default function Profile({ foto, nome, idade, profissao }){
    return(
        <div className="profile-card">
            <Foto foto={foto} />
            <Informacoes nome={nome} idade={idade} profissao={profissao} />
            <div className="footer">
                <img src={footerFoto} alt="icon do footer" />
                <p>Colaborador</p>
            </div>
        </div>
    )

}