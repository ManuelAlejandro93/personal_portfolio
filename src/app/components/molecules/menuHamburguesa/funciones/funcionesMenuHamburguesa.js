export function asignarClaseParaElMenuDesplegable(estadoGatillo,estadoDesplegable, setEstadoDesplegable, styles) {
  if (estadoGatillo) {
    setEstadoDesplegable(`${styles.menuDesplegableInvisible}`);
  } else {
    setEstadoDesplegable(`${styles.menuDesplegableVisible}`);
  }
}
