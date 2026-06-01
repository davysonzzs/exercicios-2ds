export default function ControleDeAcoes(){
    function atacar(){
        alert("ataque")
    }
    function defesa(){
        alert("defesa")
    }
    function fugir(){
        alert("fugir")
    }
    return(
        <>
        <button onClick={atacar}>atacar</button>
        <button onClick={defesa}>defender</button>
        <button onClick={fugir}>fugir</button>
        </>
    )
}