import Image from "next/image";
import styles from "./ContenidoInicio.module.css";

export default function ContenidoInicio() {
  return (
    <> 
       <main className={styles.main}>
        <div className={styles.contenido}>
          <div className={styles.textosHeader}>
            <h1 className={styles.h1Header}>Manuel Pinzón Aguirre</h1>
            <p className={styles.pHeader}>Front-End Developer: Next.js, React.js, Javascript.</p>
          </div>

          <Image
            src="/fotoDePerfil/fotoDePerfil.jpeg"
            width={270}
            height={270}
            alt="Foto del Dev Manuel"
            className={styles.ImagenManuel}
            priority={true}
          ></Image>
        </div>
      </main> 
    </>
  );
}
