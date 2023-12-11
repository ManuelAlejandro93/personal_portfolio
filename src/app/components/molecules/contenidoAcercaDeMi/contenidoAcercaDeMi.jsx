import Image from "next/image";
import styles from "./contenidoAcercaDeMi.module.css";

export default function ContenidoAcercaDeMi() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Image src="/fotoAcercaDeMi/foto.jpeg"
            width={600}
            height={400}
            alt="Foto del Dev Manuel"
            priority={true}
            className= {styles.foto}></Image>
          
          <div className= {styles.divDerecha}>
            <p className= {`${styles.parrafo} ${styles.parrafo1}`}>
            Me llamo Manuel Pinzón. Soy un desarrollador FrontEnd y un deportista amateur muy competitivo.
            </p>
            <p className= {`${styles.parrafo} ${styles.parrafo2}`}>Además me he especialiado en desarrollo front-end y encuentro mucha motivacion el desarrollo web en general. </p>

            <p className={`${styles.parrafo} ${styles.parrafo3}`} >Mis motivaciones en la vida se mantienen en un buen vivir diario, y en el aprecio de las cosas pequeñas. Disfruto mucho los nuevos retos que me recuerden que la vida es bella y retadora en sus facetas más simples y más complejas.</p>

            <p className= {`${styles.parrafo} ${styles.parrafo4}`}>Conocí la programación cuando tuve que estudiar C++ para los proyectos de la universidad, y sinceramente debo admitir que hicimos match automático. Poder hablar el lenguaje de las maquinas es simplemente fascinante.
            </p>

            <p className= {`${styles.parrafo} ${styles.parrafo5}`}>En esta etapa de mi vida me apasiona el desarrollo front-end, en la tecnología React y el framework Next.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
