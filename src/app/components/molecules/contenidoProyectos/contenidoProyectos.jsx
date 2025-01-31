import Card from '../card/card';
import styles from './contenidoProyectos.module.css';
import { nombreCards } from './utils/nombreCards';

let nombreDeSeccionEnProyectos = 'proyectos';

export default function ContenidoProyectos() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Card
            texto1={'Personal Components Library'}
            texto3={'Next & TS & Tailwind & Shadcn'}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual={nombreCards.personalComponents}
          ></Card>
          <Card
            texto1={'Hotels.'}
            texto3={'Next & React'}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual={nombreCards.hotels}
          ></Card>
          <Card
            texto1={'Book It.'}
            texto3={'JS Vainilla + DOM'}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual={nombreCards.book_it}
          ></Card>
          <Card
            texto1={'Swipe'}
            texto3={'JS Vainilla'}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual={nombreCards.swipe}
          ></Card>

          <Card
            texto1={'Gifs Page + Testing'}
            texto2={'algo'}
            texto3={'React + Jest + Testing Library'}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual={nombreCards.gif_expert}
          ></Card>
          <Card
            texto1={'To-do-app'}
            texto3={'TS + React + Jest + Testing Library'}
            seccionOrigen={nombreDeSeccionEnProyectos}
            infoCardIndividual={nombreCards.todoApp}
          ></Card>
        </div>
      </main>
    </>
  );
}
