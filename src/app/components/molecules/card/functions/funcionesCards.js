export function asignarClaseAlContenedor(seccionOrigen, styles) {
  if (seccionOrigen === "proyectos") {
    return styles.divMain
  } else if (seccionOrigen === "contacto" || seccionOrigen === "habilidades") {
    return styles.divMainHabilidades
  } else if (seccionOrigen === "estudios") {
    return styles.divMainEstudios
  }
}


export function asignarFondoAlContenedor(seccionOrigen, foto, imagenDeFondo) {

  if (seccionOrigen === "proyectos") {
    return { backgroundImage: `url("${imagenDeFondo}")` }
  } else {
    return { backgroundImage: `url("${foto}")` }
  }
}


function asignarLinkEnContacto(infoCardIndividual) {
  if (infoCardIndividual === "gmail") {
    return "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxTnpWTfgZwLKPlxrpKcRNzRKpzkkDvfWpqgcGddFBnWVRpGjkgNKPVjWhnCdrGmNfgSNz"
  } else if (infoCardIndividual === "whatsApp") {
    return "https://wa.me/+573143415131?text=Hola,%20Manuel%20¿Cómo%20estás%3F%20%20Te%20%20queremos%20conocer%20en%20tu%20ámbito%20laboral%20por%20favor%20responde%20en%20cuanto%20veas%20el%20mensaje%20..."
  } else if (infoCardIndividual === "linkedIn") {
    return "https://www.linkedin.com/in/manuelpinzon/"
  } else if (infoCardIndividual === "vercel") {
    return "https://vercel.com/manuel-alejandro-pinzon-aguirres-projects"
  } else if (infoCardIndividual === "github") {
    return "https://github.com/ManuelAlejandro93"
  } else {
    return "https://wa.me/+573143415131?text=Hola,%20Manuel%20¿Cómo%20estás%3F%20%20Te%20%20queremos%20conocer%20en%20tu%20ámbito%20laboral%20por%20favor%20responde%20en%20cuanto%20veas%20el%20mensaje%20..."
  }
};

function asignarLinkEnProyectos(infoCardIndividual) {
  if (infoCardIndividual === "hotels") {
    return 'https://reto4-hotels.vercel.app/'
  } else if (infoCardIndividual === "bookit") {
    return 'https://manuelalejandro93.github.io/hotels_deployment/'
  } else if (infoCardIndividual === "swipe") {
    return 'https://manuelalejandro93.github.io/Page-Swipe_1/'
  } else {
    return 'https://wa.me/+573143415131?text=Hola,%20Manuel%20¿Cómo%20estás%3F%20%20Te%20%20queremos%20conocer%20en%20tu%20ámbito%20laboral%20por%20favor%20responde%20en%20cuanto%20veas%20el%20mensaje%20...'
  }
};

function asignarLinkEnHabilidades(infoCardIndividual) {
  if (infoCardIndividual === "github") {
    return "https://github.com/ManuelAlejandro93"
  } else if (infoCardIndividual === "git") {
    return "https://git-scm.com/"
  } else if (infoCardIndividual === "react") {
    return "https://es.react.dev/"
  } else if (infoCardIndividual === "next") {
    return "https://nextjs.org/"
  } else if (infoCardIndividual === "sass") {
    return "https://sass-lang.com/"
  } else if (infoCardIndividual === "htmlCssJS") {
    return "https://ecma-international.org/"
  } else {
    return "https://wa.me/+573143415131?text=Hola,%20Manuel%20¿Cómo%20estás%3F%20%20Te%20%20queremos%20conocer%20en%20tu%20ámbito%20laboral%20por%20favor%20responde%20en%20cuanto%20veas%20el%20mensaje%20..."
  }
};

export function asignarLinkDeHref(seccionOrigen, infoCardIndividual) {

  if (seccionOrigen === "contacto") {
    let respuesta = asignarLinkEnContacto(infoCardIndividual);
    return respuesta;
  } else if (seccionOrigen === "estudios") {
    return "https://www.uniquindio.edu.co/"
  } else if (seccionOrigen === "proyectos") {
    let respuesta = asignarLinkEnProyectos(infoCardIndividual);
    return respuesta
  } else if (seccionOrigen === "habilidades") {
    let respuesta = asignarLinkEnHabilidades(infoCardIndividual);
    return respuesta
  }
}