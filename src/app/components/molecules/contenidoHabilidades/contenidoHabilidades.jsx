import Card from "../card/card";
import styles from "./contenidoHabilidades.module.css";
import { imagenes } from "./assets/imagenesDeTecnologias";
import { nombreCards } from "./assets/nombreCardsIndividuales";


let nombreDeSeccionEnHabilidades = "habilidades";

export default function ContenidoHabilidades() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Card
            foto={imagenes.next}
            texto1={""}
            texto3={""}
            seccionOrigen={nombreDeSeccionEnHabilidades}
            infoCardIndividual = {nombreCards.next}
          ></Card>
          <Card foto={imagenes.react} texto1={""} texto3={""} seccionOrigen={nombreDeSeccionEnHabilidades}
          infoCardIndividual = {nombreCards.react}
          ></Card>
          <Card foto={imagenes.github} texto1={""} texto3={""} seccionOrigen={nombreDeSeccionEnHabilidades}
          
          infoCardIndividual = {nombreCards.github}></Card>
          <Card foto={imagenes.git} texto1={""} texto3={""} seccionOrigen={nombreDeSeccionEnHabilidades}
          infoCardIndividual = {nombreCards.git}></Card>
          <Card foto={imagenes.sass} texto1={""} texto3={""} seccionOrigen={nombreDeSeccionEnHabilidades}
          infoCardIndividual = {nombreCards.sass}></Card>
          <Card foto={imagenes.htmlCssJS} texto1={""} texto3={""} seccionOrigen={nombreDeSeccionEnHabilidades}
          infoCardIndividual = {nombreCards.htmlCssJS}></Card>
        </div>
      </main>
    </>
  );
}
