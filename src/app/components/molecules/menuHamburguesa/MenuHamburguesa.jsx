'use client'
import Link from "next/link";
import styles from './MenuHamburguesa.module.css';
import { useState,useEffect } from "react";
import {asignarClaseParaElMenuDesplegable} from './funciones/funcionesMenuHamburguesa';

export default function MenuHamburguesa() {
  const [estadoGatillo,setEstadoGatillo] = useState(true);

  const [estadoDesplegable,setEstadoDesplegable] = useState(`${styles.menuDesplegable} ${styles.menuDesplegableInvisible}`);

  useEffect(() => {
    if(estadoGatillo){
      asignarClaseParaElMenuDesplegable(estadoGatillo,estadoDesplegable,setEstadoDesplegable,styles)
    } else {
      asignarClaseParaElMenuDesplegable(estadoGatillo,estadoDesplegable,setEstadoDesplegable,styles)
    }
  }, [estadoGatillo])
  
  return (
    <>
      <div className={styles.macroMenuHamburguesa}>
        <button
          className={styles.gatilloMenu}
          id="gatilloMenu"
          onClick={()=>{setEstadoGatillo(!estadoGatillo)}}
        >
        </button>

        <label className={styles.labelDeGatillo} htmlFor="gatilloMenu">
          <div className={styles.hamburguesa}>
            <div className={styles.linea}></div>
            <div className={styles.linea}></div>
            <div className={styles.linea}></div>
          </div>
        </label>
        <div className={estadoDesplegable}>
          <Link className={styles.links} href={"/"} onClick={()=>{setEstadoGatillo(!estadoGatillo)}}>
            Inicio
          </Link>

          <Link className={styles.links} href={"/pages/AcercaDeMi"} onClick={()=>{setEstadoGatillo(!estadoGatillo)}}>
            Acerca de mi
          </Link>

          <Link className={styles.links} href={"/pages/Proyectos"} onClick={()=>{setEstadoGatillo(!estadoGatillo)}}>
            Proyectos
          </Link>

          <Link className={styles.links} href={"/pages/Habilidades"} onClick={()=>{setEstadoGatillo(!estadoGatillo)}}>
            Habilidades
          </Link>

          <Link className={styles.links} href={"/pages/Estudios"} onClick={()=>{setEstadoGatillo(!estadoGatillo);console.log("Ahora o soy ", estadoGatillo)}}>
            Estudio
          </Link>

          <Link className={styles.links} href={"/pages/Contacto"} onClick={()=>{setEstadoGatillo(!estadoGatillo);console.log("Ahora o soy ", estadoGatillo)}}>
            Contacto
          </Link>
        </div>
      </div>
    </>
  );
}
