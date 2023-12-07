import Card from "../card/card";
import styles from "./contenidoHabilidades.module.css";
import { tecnologias } from "./assets/imagenesDeTecnologias";

let github = tecnologias.github;
let git = tecnologias.git;
let react = tecnologias.react;
let next = tecnologias.next;
let sass = tecnologias.sass;
let htmlCssJS = tecnologias.htmlCssJS;

let nombreDeSeccionEnHabilidades = "habilidades";

export default function ContenidoHabilidades() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Card
            foto={next}
            texto1={""}
            texto3={""}
            seccionOrigen={nombreDeSeccionEnHabilidades}
          ></Card>
          <Card foto={react} texto1={""} texto3={""} seccionOrigen={nombreDeSeccionEnHabilidades}></Card>
          <Card foto={github} texto1={""} texto3={""} seccionOrigen={nombreDeSeccionEnHabilidades}></Card>
          <Card foto={git} texto1={""} texto3={""} seccionOrigen={nombreDeSeccionEnHabilidades}></Card>
          <Card foto={sass} texto1={""} texto3={""} seccionOrigen={nombreDeSeccionEnHabilidades}></Card>
          <Card foto={htmlCssJS} texto1={""} texto3={""} seccionOrigen={nombreDeSeccionEnHabilidades}></Card>
        </div>
      </main>
    </>
  );
}
