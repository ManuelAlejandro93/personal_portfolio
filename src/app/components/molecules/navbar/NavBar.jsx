import Link from "next/link";
import styles from "./navbar.module.css";
import MenuHamburguesa from "../menuHamburguesa/MenuHamburguesa";


export default function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href={"/"} className={styles.portfolio}>
          {" "}
          <i>Portfolio</i>
        </Link>
        <div className={styles.contenedorLinks}>
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

        <MenuHamburguesa></MenuHamburguesa>
      </nav>
    </>
  );
}
