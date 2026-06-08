export default function ListaPersonagens({ Personagens }) {
    if(Personagens.length <= 0){
        return(
            <>
            <p>Nenhum Personagem cadastrado</p>
            </>
        )
    } else{
        return(
            <div className="Visor">
                <ul>
                {Personagens.map((personagem) => (
                    <li>{personagem.nome} - {personagem.classe}</li>
                ))}
                </ul>
            </div>
        )
    }
}