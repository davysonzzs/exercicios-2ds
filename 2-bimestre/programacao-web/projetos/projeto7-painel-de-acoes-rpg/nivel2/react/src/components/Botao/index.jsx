import "./style.css"
export default function Botao({ texto, onClick, cor, img }){
    return(
        <>
        <button onClick={onClick} style={{backgroundColor: `${cor}`}}><img src={img}/>{texto}</button>
        </>
    )
}