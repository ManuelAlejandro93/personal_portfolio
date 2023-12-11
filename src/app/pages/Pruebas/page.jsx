import Image from "next/image";

export default function PaginaDePruebas() {
  return (
    <>
    <h3>Aquí se suelen hacer pruebas de camponentes.</h3>
    <Image
            src="/fotoAcercaDeMi/fotoAcercaDeMi.jpeg"
            width={270}
            height={270}
            alt="Foto del Dev Manuel"
            priority={true}
          ></Image>
    </>
  );
}
