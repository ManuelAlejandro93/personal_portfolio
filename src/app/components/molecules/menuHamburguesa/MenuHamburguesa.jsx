import Link from "next/link";
import styles from "./MenuHamburguesa.module.css";

export default function MenuHamburguesa() {
 
  return (
    <>
      <div className={styles.macroMenuHamburguesa}>
        <input
          type="checkbox"
          className={styles.gatilloMenu}
          id="gatilloMenu"
        />
        <label className={styles.labelDeGatillo} htmlFor="gatilloMenu">
          <div className={styles.hamburguesa}>
            <div className={styles.linea}></div>
            <div className={styles.linea}></div>
            <div className={styles.linea}></div>
          </div>
        </label>
        <div className={styles.menuDesplegable}>
          <Link className={styles.links} href={"/"}>
            Inicio
          </Link>

          <Link className={styles.links} href={"/pages/AcercaDeMi"}>
            Acerca de mi
          </Link>

          <Link className={styles.links} href={"/pages/Proyectos"}>
            Proyectos
          </Link>

          <Link className={styles.links} href={"/pages/Habilidades"}>
            Habilidades
          </Link>

          <Link className={styles.links} href={"/pages/Estudios"}>
            Estudio
          </Link>

          <Link className={styles.links} href={"/pages/Contacto"}>
            Contacto
          </Link>
        </div>
      </div>
    </>
  );
}
