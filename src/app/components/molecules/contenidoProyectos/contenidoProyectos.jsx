import Card from "../card/card";
import styles from "./contenidoProyectos.module.css";
import {nombreCards} from "./utils/nombreCards";

let nombreDeSeccionEnProyectos = "proyectos";

export default function ContenidoProyectos() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Card
            texto1={"Hotels."}
            texto3={"Next & React"}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual = {nombreCards.hotels}
          ></Card>

          <Card
            texto1={"Book It."}
            texto3={"JS Vainilla + DOM"}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual = {nombreCards.book_it}
          ></Card>

          <Card
            texto1={"Swipe"}
            texto3={"JS Vainilla"}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual = {nombreCards.swipe}
          ></Card>

          <Card
            texto1={"Technical Documentation."}
            texto3={"HTML + CSS"}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual = {nombreCards.technical_documentation}
          ></Card>
          <Card
            texto1={"Survey Form."}
            texto3={"HTML + CSS"}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual = {nombreCards.survey_form}
          ></Card>
          <Card
            texto1={"Tribute Page"}
            texto2={"algo"}
            texto3={"HTML + CSS"}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual = {nombreCards.tribute_page}
          ></Card>
        </div>
      </main>
    </>
  );
}
