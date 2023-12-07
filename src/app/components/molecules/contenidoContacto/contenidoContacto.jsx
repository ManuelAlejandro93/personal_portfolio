import Card from "../card/card";
import styles from "./contenidoContacto.module.css";
import { redes } from "./assets/imagenesDeRedes";
import {nombreCards} from './utils/nombreCards'

let gmail = redes.gmail;
let whatsApp = redes.whatsApp;
let linkedIn = redes.linkedIn;
let telefonoFijo = redes.telefonoFijo;
let vercel = redes.vercel;
let github = redes.github;

let nombreDeSeccionEnContacto = "contacto";

export default function ContenidoContacto() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Card foto={gmail} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnContacto} infoCardIndividual = {nombreCards.gmail}></Card>
          <Card foto={whatsApp} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnContacto} infoCardIndividual = {nombreCards.whatsApp}></Card>

          <Card foto={linkedIn} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnContacto} infoCardIndividual = {nombreCards.linkedIn}></Card>

          <Card foto={telefonoFijo} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnContacto} infoCardIndividual = {nombreCards.telefonoFijo}></Card>

          <Card foto={vercel} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnContacto} infoCardIndividual = {nombreCards.vercel}></Card>

          <Card foto={github} texto1={""} texto3={""} seccionOrigen = {nombreDeSeccionEnContacto} infoCardIndividual = {nombreCards.github}></Card>
        </div>
      </main>
    </>
  );
}
