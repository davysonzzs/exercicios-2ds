import Profile from "./components/Profile";
import Logo from "./assets/59045.png"
import Logo2 from "./assets/do-utilizador.png"
import fotoPerfil from "./assets/fotoPerfil.jpg"

export default function App(){
    return(
        <div className="main">
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
                <Profile nome="Mariana" idade={20} profissao="Dev" foto={fotoPerfil} />
                <Profile nome="Maria" idade={20} profissao="Dev" foto={fotoPerfil} />
                <Profile nome="Maria" idade={20} profissao="Dev" foto={fotoPerfil} />
                </div>
            </div>
            <footer>
                <p>&copy; 2026 TechVision &bull; Todos os diretos</p>
            </footer>
        </div>
    )
}