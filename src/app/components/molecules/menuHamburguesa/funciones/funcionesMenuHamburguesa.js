export function asignarClaseParaElMenuDesplegable(estadoGatillo,estadoDesplegable, setEstadoDesplegable, styles) {
  if (estadoGatillo) {
    setEstadoDesplegable(`${styles.menuDesplegableInvisible}`);
    console.log(estadoDesplegable);
  } else {
    setEstadoDesplegable(`${styles.menuDesplegableVisible}`);
    console.log(estadoDesplegable);
  }
}
