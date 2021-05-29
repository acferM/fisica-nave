import { Container } from './styles';

interface SchoolContentProps {
  id: string;
}

export function SchoolContent({ id }: SchoolContentProps): JSX.Element {
  return (
    <Container id={id}>
      <main>
        <svg
          width="35"
          height="11"
          viewBox="0 0 35 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="35" height="11" rx="5.5" fill="#009F0B" />
        </svg>
        <section>
          <h1>Escola Técnica Estadual Cícero Dias</h1>
          <h2>NAVE RECIFE</h2>
          <div>
            <button type="button">CONHEÇA O PROJETO NAVE</button>
            <button type="button">TOUR VIRTUAL PELA ESCOLA</button>
          </div>
        </section>
      </main>

      <img src="group.jpg" alt="Group" />
    </Container>
  );
}
