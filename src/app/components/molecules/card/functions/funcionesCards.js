export function asignarClaseAlContenedor(seccionOrigen, styles) {
  if (seccionOrigen === 'proyectos') {
    return styles.divMain;
  } else if (seccionOrigen === 'contacto' || seccionOrigen === 'habilidades') {
    return styles.divMainHabilidades;
  } else if (seccionOrigen === 'estudios') {
    return styles.divMainEstudios;
  }
}

export function asignarFondoAlContenedor(seccionOrigen, foto, imagenDeFondo) {
  if (seccionOrigen === 'proyectos') {
    return { backgroundImage: `url("${imagenDeFondo}")` };
  } else {
    return { backgroundImage: `url("${foto}")` };
  }
}

function asignarLinkEnContacto(infoCardIndividual) {
  if (infoCardIndividual === 'gmail') {
    return 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxTnpWTfgZwLKPlxrpKcRNzRKpzkkDvfWpqgcGddFBnWVRpGjkgNKPVjWhnCdrGmNfgSNz';
  } else if (infoCardIndividual === 'whatsApp') {
    return 'https://wa.me/+573143415131?text=Hola,%20Manuel%20¿Cómo%20estás%3F%20%20Te%20%20queremos%20conocer%20en%20tu%20ámbito%20laboral%20por%20favor%20responde%20en%20cuanto%20veas%20el%20mensaje%20...';
  } else if (infoCardIndividual === 'linkedIn') {
    return 'https://www.linkedin.com/in/manuelpinzon/';
  } else if (infoCardIndividual === 'vercel') {
    return 'https://vercel.com/manuel-alejandro-pinzon-aguirres-projects';
  } else if (infoCardIndividual === 'github') {
    return 'https://github.com/ManuelAlejandro93';
  } else {
    return 'https://wa.me/+573143415131?text=Hola,%20Manuel%20¿Cómo%20estás%3F%20%20Te%20%20queremos%20conocer%20en%20tu%20ámbito%20laboral%20por%20favor%20responde%20en%20cuanto%20veas%20el%20mensaje%20...';
  }
}

function asignarLinkEnProyectos(infoCardIndividual) {
  if (infoCardIndividual === 'hotels') {
    return 'https://reto4-hotels.vercel.app/';
  } else if (infoCardIndividual === 'bookit') {
    return 'https://manuelalejandro93.github.io/hotels_deployment/';
  } else if (infoCardIndividual === 'swipe') {
    return 'https://manuelalejandro93.github.io/Page-Swipe_1/';
  } else if (infoCardIndividual === 'to-do-app') {
    return 'https://todo-app-react-ts-topaz.vercel.app/';
  } else if (infoCardIndividual === 'landing_page') {
    return 'https://manuelalejandro93.github.io/landingPage1/';
  } else if (infoCardIndividual === 'gif_expert') {
    return 'https://gif-expert-testing-k18s.vercel.app/';
  } else if (infoCardIndividual === 'landing_page') {
    return 'https://manuelalejandro93.github.io/landingPage1/';
  } else if (infoCardIndividual === 'personalComponents') {
    return 'https://headless-components-on-ts-u7ki.vercel.app/Pages/dialog';
  }

  // por defecto redirige a whatsApp.
  else {
    return 'https://wa.me/+573143415131?text=Hola,%20Manuel%20¿Cómo%20estás%3F%20%20Te%20%20queremos%20conocer%20en%20tu%20ámbito%20laboral%20por%20favor%20responde%20en%20cuanto%20veas%20el%20mensaje%20...';
  }
}

function asignarLinkEnHabilidades(infoCardIndividual) {
  if (infoCardIndividual === 'github') {
    return 'https://github.com/ManuelAlejandro93';
  } else if (infoCardIndividual === 'git') {
    return 'https://git-scm.com/';
  } else if (infoCardIndividual === 'react') {
    return 'https://es.react.dev/';
  } else if (infoCardIndividual === 'next') {
    return 'https://nextjs.org/';
  } else if (infoCardIndividual === 'sass') {
    return 'https://sass-lang.com/';
  } else if (infoCardIndividual === 'htmlCssJS') {
    return 'https://ecma-international.org/';
  } else {
    return 'https://wa.me/+573143415131?text=Hola,%20Manuel%20¿Cómo%20estás%3F%20%20Te%20%20queremos%20conocer%20en%20tu%20ámbito%20laboral%20por%20favor%20responde%20en%20cuanto%20veas%20el%20mensaje%20...';
  }
}

function asignarLinkEnEstudios(infoCardIndividual) {
  if (infoCardIndividual === 'uniquindio') {
    return 'https://www.uniquindio.edu.co/programas/publicaciones/316/ingenieria-de-alimentos/';
  } else if (infoCardIndividual === 'devtools') {
    return 'https://www.linkedin.com/posts/manuelpinzon_its-nice-to-share-this-achievement-here-activity-7128515387104595968-Cb9u?utm_source=share&utm_medium=member_desktop';
  } else if (infoCardIndividual === 'freeCodeCamp') {
    return 'https://www.freecodecamp.org/certification/Manuel-Alejandro-Pinzon-Aguirre/responsive-web-design';
  } else if (infoCardIndividual === 'platzi') {
    return 'https://platzi.com/p/clasefisica2019/curso/3208-programacion-basica/diploma/detalle/';
  } else if (infoCardIndividual === 'openBootCamp') {
    return 'https://open-bootcamp.com/';
  } else if (infoCardIndividual === 'youTube') {
    return 'https://www.youtube.com/@devtoolsacademy/featured';
  } else {
    return 'https://wa.me/+573143415131?text=Hola,%20Manuel%20¿Cómo%20estás%3F%20%20Te%20%20queremos%20conocer%20en%20tu%20ámbito%20laboral%20por%20favor%20responde%20en%20cuanto%20veas%20el%20mensaje%20...';
  }
}

export function asignarLinkDeHref(seccionOrigen, infoCardIndividual) {
  if (seccionOrigen === 'contacto') {
    let respuesta = asignarLinkEnContacto(infoCardIndividual);
    return respuesta;
  } else if (seccionOrigen === 'estudios') {
    let respuesta = asignarLinkEnEstudios(infoCardIndividual);
    return respuesta;
  } else if (seccionOrigen === 'proyectos') {
    let respuesta = asignarLinkEnProyectos(infoCardIndividual);
    return respuesta;
  } else if (seccionOrigen === 'habilidades') {
    let respuesta = asignarLinkEnHabilidades(infoCardIndividual);
    return respuesta;
  }
}
