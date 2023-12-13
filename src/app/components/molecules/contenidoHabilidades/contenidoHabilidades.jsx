import Card from "../card/card";
import styles from "./contenidoHabilidades.module.css";
import { imagenes } from "./assets/imagenesDeTecnologias";
import { nombreCards } from "./assets/nombreCardsIndividuales";

let seccion = "habilidades";

export default function ContenidoHabilidades() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Card
            foto={imagenes.next}
            seccionOrigen={seccion}
            infoCardIndividual={nombreCards.next}
          ></Card>
          <Card
            foto={imagenes.react}
            seccionOrigen={seccion}
            infoCardIndividual={nombreCards.react}
          ></Card>
          <Card
            foto={imagenes.github}
            seccionOrigen={seccion}
            infoCardIndividual={nombreCards.github}
          ></Card>
          <Card
            foto={imagenes.git}
            seccionOrigen={seccion}
            infoCardIndividual={nombreCards.git}
          ></Card>
          <Card
            foto={imagenes.sass}
            seccionOrigen={seccion}
            infoCardIndividual={nombreCards.sass}
          ></Card>
          <Card
            foto={imagenes.htmlCssJS}
            seccionOrigen={seccion}
            infoCardIndividual={nombreCards.htmlCssJS}
          ></Card>
        </div>
      </main>
    </>
  );
}
