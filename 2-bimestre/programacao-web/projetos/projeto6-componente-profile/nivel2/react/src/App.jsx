import Profile from "./components/Profile";
import Logo from "./assets/59045.png"
import Logo2 from "./assets/do-utilizador.png"

export default function App(){
    return(
        <div>
            <header>
                <div className="logos">
                    <img src={Logo} alt="Logo" style={{width: "50px"}}/>
                    <p>TechVison</p> 
                </div>
                <div className="logos">
                    <img src={Logo2} alt="Logo 2" style={{width: "50px"}}/>
                    <p>Sistema interno</p>
                </div>
            </header>
            <div className="conteudo">
                <div className="titulo">
                    <h1>usuários do sistema</h1>
                    <p>Conheça os membros da nossa equipe</p>
                </div>
                <div className="content-cards">
                <Profile nome="Mariana" idade={20} profissao="Dev" foto="https://via.placeholder.com/250" />
                <Profile nome="Maria" idade={20} profissao="Dev" foto="https://via.placeholder.com/250" />
                <Profile nome="Maria" idade={20} profissao="Dev" foto="https://via.placeholder.com/250" />
                </div>
            </div>
        </div>
    )
}