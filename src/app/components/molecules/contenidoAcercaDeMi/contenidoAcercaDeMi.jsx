import Image from "next/image";
import styles from "./contenidoAcercaDeMi.module.css";

export default function ContenidoAcercaDeMi() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Image
            src="/fotoAcercaDeMi/foto.jpeg"
            width={600}
            height={400}
            alt="Foto del Dev Manuel"
            priority={true}
            className={styles.foto}
          ></Image>
          <div className={styles.divDerecha}>
            <p className={`${styles.parrafos} ${styles.parrafo1}`}>
              Me llamo Manuel Pinzón. Soy un desarrollador FrontEnd y un
              deportista amateur muy competitivo.
            </p>
            <p className={`${styles.parrafos} ${styles.parrafo2}`}>
              Soy un operador del Framework Next.js y la libería React.js, además he tenido cercania a Material UI, Dart, Flutter, SQL, PL/SQL y Python de manera profesional.
            </p>

            <p className={`${styles.parrafos} ${styles.parrafo3}`}>
              Mi experiencia empieza en la empresa Avidbots, donde ejercí el desarrollo de programas de limpieza automatizada para Robots, trabajando con un poco de Python, metodología Canvas, y tickets de asignación de tareas.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
