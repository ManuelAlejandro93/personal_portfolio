'use client'

import styles from "./card.module.css";
import { imagenDeFondo } from "./assets/imagenDeFondo";
import {
  asignarClaseAlContenedor,
  asignarFondoAlContenedor,
  asignarLinkDeHref,
} from "./functions/funcionesCards";
import Link from "next/link";

export default function Card({
  texto1,
  texto3,
  foto,
  seccionOrigen,
  infoCardIndividual,
}) {
  return (
    <>
      <Link
        href={asignarLinkDeHref(seccionOrigen, infoCardIndividual)}
        target="_blank"
        className={asignarClaseAlContenedor(seccionOrigen, styles)}
        style={asignarFondoAlContenedor(seccionOrigen, foto, imagenDeFondo)}
      >
        <h2 className={styles.h2}>{texto1}</h2>

        <div className={styles.contenedorArriba}>
          <p className={styles.p}></p>
        </div>

        <div className={styles.contenedorAbajo}>
          <p className={styles.pAbajo}>{texto3}</p>
          <p className={styles.precioAbajo}></p>
        </div>
      </Link>
    </>
  );
}
