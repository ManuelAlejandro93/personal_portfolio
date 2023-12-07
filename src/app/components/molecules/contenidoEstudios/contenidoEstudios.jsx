import Card from "../card/card";
import styles from "./contenidoEstudios.module.css";
import { redes } from "./assets/imagenesDeRedes";
import { nombreCards } from "./utils/nombreCards";
import Image from "next/image";

let fotoDevToolsPNG = "";


let uniquindio = redes.uniquindio;
let devtools = redes.devtools;
let freeCodeCamp = redes.freeCodeCamp;
let platzi = redes.platzi;
let openBootCamp = redes.openBootCamp;
let youTube = redes.youTube;


let nombreDeSeccionEnEstudios = "estudios";

export default function ContenidoEstudios() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Card foto={uniquindio} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnEstudios} infoCardIndividual = {nombreCards.uniquindio}>
          </Card>
          
          <Card foto={devtools} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnEstudios} infoCardIndividual = {nombreCards.devtools}>
            
          </Card>

          <Card foto={freeCodeCamp} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnEstudios} infoCardIndividual = {nombreCards.freeCodeCamp}></Card>

          <Card foto={platzi} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnEstudios} infoCardIndividual = {nombreCards.platzi}></Card>

          <Card foto={openBootCamp} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnEstudios} infoCardIndividual = {nombreCards.openBootCamp}></Card>

          <Card foto={youTube} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnEstudios} infoCardIndividual = {nombreCards.youTube}></Card>

          
        </div>
      </main>
    </>
  );
}