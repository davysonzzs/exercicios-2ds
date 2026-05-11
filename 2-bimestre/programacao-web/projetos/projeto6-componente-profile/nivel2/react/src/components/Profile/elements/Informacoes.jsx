export default function Informacoes({ nome, idade, profissao }){
    return(
        <>
        <h1>{nome}</h1>
        <p>Idade: {idade} anos</p>
        <p>Profissão: {profissao}</p>
        </>
    )
}