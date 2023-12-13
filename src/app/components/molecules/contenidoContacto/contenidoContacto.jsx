import Card from "../card/card";
import styles from "./contenidoContacto.module.css";
import { redes } from "./assets/imagenesDeRedes";
import {nombreCards} from './utils/nombreCards'

let seccion = "contacto";

export default function ContenidoContacto() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Card foto={redes.gmail} seccionOrigen = {seccion} infoCardIndividual = {nombreCards.gmail}></Card>
          <Card foto={redes.whatsApp} seccionOrigen = {seccion} infoCardIndividual = {nombreCards.whatsApp}></Card>

          <Card foto={redes.linkedIn} seccionOrigen = {seccion} infoCardIndividual = {nombreCards.linkedIn}></Card>

          <Card foto={redes.telefonoFijo} seccionOrigen = {seccion} infoCardIndividual = {nombreCards.telefonoFijo}></Card>

          <Card foto={redes.vercel} seccionOrigen = {seccion} infoCardIndividual = {nombreCards.vercel}></Card>

          <Card foto={redes.github} seccionOrigen = {seccion} infoCardIndividual = {nombreCards.github}></Card>
        </div>
      </main>
    </>
  );
}
