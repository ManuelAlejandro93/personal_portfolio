import Card from "../card/card";
import styles from "./contenidoEstudios.module.css";
import { imagenRedes as img} from "./assets/imagenesDeRedes";
import { institucionDeEstudio as estudio } from "./utils/institucionesDeEstudio";

let seccion = "estudios";

export default function ContenidoEstudios() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Card
            foto={img.uniquindio}
            seccionOrigen={seccion}
            infoCardIndividual={estudio.uniquindio}
          ></Card>

          <Card
            foto={img.devtools}
            seccionOrigen={seccion}
            infoCardIndividual={estudio.devtools}
          ></Card>

          <Card
            foto={img.freeCodeCamp}
            seccionOrigen={seccion}
            infoCardIndividual={estudio.freeCodeCamp}
          ></Card>

          <Card
            foto={img.platzi}
            seccionOrigen={seccion}
            infoCardIndividual={estudio.platzi}
          ></Card>

          <Card
            foto={img.openBootCamp}
            seccionOrigen={seccion}
            infoCardIndividual={estudio.openBootCamp}
          ></Card>

          <Card
            foto={img.youTube}
            seccionOrigen={seccion}
            infoCardIndividual={estudio.youTube}
          ></Card>
        </div>
      </main>
    </>
  );
}
