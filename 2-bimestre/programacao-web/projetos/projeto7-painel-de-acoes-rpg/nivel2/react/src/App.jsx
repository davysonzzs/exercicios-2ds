import Card from "./components/Card";
import FormularioMensagem from "./components/FormularioMensagem";
import fotoDePerfil from './assets/fotoDePerfil.jpg'
import espadasCruzadas from './assets/espadasCruzadas.png'

export default function App(){
  return(
    <div>
      <header>
        <img src={espadasCruzadas} />
        <h1>Legends arena</h1>
        
      </header>
      <Card classe={"Tank"} nivel={25} vida={"850/1000"} experiencia={"1250/2000"} foto={fotoDePerfil}>Guerreiro</Card>
      <FormularioMensagem />
   </div>
  )
}