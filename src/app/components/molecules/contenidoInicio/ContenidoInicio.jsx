import Image from "next/image";
import stylesContenidoInicio from "./ContenidoInicio.module.css";

export default function ContenidoInicio() {
  return (
    <> 
       <main className={stylesContenidoInicio.main}>
        <div className={stylesContenidoInicio.contenido}>
          <div className={stylesContenidoInicio.textosHeader}>
            <h1 className={stylesContenidoInicio.h1Header}>Manuel Pinzón Aguirre</h1>
            <h3 className={stylesContenidoInicio.advertencia}>Algunas partes de esta página se encuentran en reparación</h3>
            <h3 className={stylesContenidoInicio.advertencia}>más info: +573143415131</h3>
            <p className={stylesContenidoInicio.pHeader}>Front-End Developer: Next.js, React.js, Javascript.</p>
          </div>

          <Image
            src="/fotoDePerfil/fotoDePerfil.jpeg"
            width={270}
            height={270}
            alt="Foto del Dev Manuel"
            className={stylesContenidoInicio.ImagenManuel}
            priority={true}
          ></Image>
        </div>
      </main> 
    </>
  );
}
