import Profile from "./components/Profile";

export default function App(){
    return(
        <div>
            <h1>usuários do sistema</h1>
            <Profile nome="Mariana" idade={20} profissao="Dev" foto="https://via.placeholder.com/250" />
            <Profile nome="Maria" idade={20} profissao="Dev" foto="https://via.placeholder.com/250" />
            <Profile nome="Maria" idade={20} profissao="Dev" foto="https://via.placeholder.com/250" />
        </div>
    )
}