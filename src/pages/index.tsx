import { Carousel } from '../components/Carousel';

import { TitledContent } from '../components/TitledContent';

import {
  Container,
  Content,
  Header,
  SchoolContent,
} from '../styles/pages/Home';

const carouselVideoContent = [
  {
    id: 1,
    source:
      'https://i.ytimg.com/vi/g61dy6E8JNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC14Va7AdxZjwC-liSCmxKkDQvgsA',
    title: 'Movimento uniforme - time 9',
  },
  {
    id: 2,
    source:
      'https://i.ytimg.com/vi/g61dy6E8JNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC14Va7AdxZjwC-liSCmxKkDQvgsA',
    title: 'Movimento uniforme - time 9',
  },
  {
    id: 3,
    source:
      'https://i.ytimg.com/vi/g61dy6E8JNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC14Va7AdxZjwC-liSCmxKkDQvgsA',
    title: 'Movimento uniforme - time 9',
  },
  {
    id: 4,
    source:
      'https://i.ytimg.com/vi/g61dy6E8JNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC14Va7AdxZjwC-liSCmxKkDQvgsA',
    title: 'Movimento uniforme - time 9',
  },
  {
    id: 5,
    source:
      'https://i.ytimg.com/vi/g61dy6E8JNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC14Va7AdxZjwC-liSCmxKkDQvgsA',
    title: 'Movimento uniforme - time 9',
  },
  {
    id: 6,
    source:
      'https://i.ytimg.com/vi/g61dy6E8JNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC14Va7AdxZjwC-liSCmxKkDQvgsA',
    title: 'Movimento uniforme - time 9',
  },
  {
    id: 7,
    source:
      'https://i.ytimg.com/vi/g61dy6E8JNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC14Va7AdxZjwC-liSCmxKkDQvgsA',
    title: 'Movimento uniforme - time 9',
  },
  {
    id: 8,
    source:
      'https://i.ytimg.com/vi/g61dy6E8JNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC14Va7AdxZjwC-liSCmxKkDQvgsA',
    title: 'Movimento uniforme - time 9',
  },
  {
    id: 9,
    source:
      'https://i.ytimg.com/vi/g61dy6E8JNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC14Va7AdxZjwC-liSCmxKkDQvgsA',
    title: 'Movimento uniforme - time 9',
  },
];

export default function Home(): JSX.Element {
  return (
    <Container>
      <img src="robot.svg" alt="Robot" />
      <Content>
        <Header>
          <img src="logo.jpg" alt="NAVE logo" />
          <nav>
            <a href="#start">INICIO</a>
            <a href="#projects">PROJETOS</a>
            <a href="#contents">CONTEÚDOS</a>
            <a href="#contact">CONTATO</a>
          </nav>
        </Header>

        <SchoolContent id="start">
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
        </SchoolContent>
      </Content>

      <TitledContent
        id="projects"
        title="Projetos"
        subtitle="E AULAS"
        containerStyle={{
          marginTop: '11.875rem',
          paddingLeft: '8.75rem',
          paddingRight: '8.75rem',
        }}
      >
        <Carousel
          controlColor="green"
          content={carouselVideoContent}
          type="video"
        />
      </TitledContent>

      <TitledContent
        id="contents"
        title="Conteúdos vistos"
        subtitle="EM SALA DE AULA"
        containerStyle={{
          marginTop: '11.875rem',
          paddingLeft: '8.75rem',
          paddingRight: '8.75rem',
        }}
      >
        <Carousel
          controlColor="white"
          content={carouselVideoContent}
          type="video"
        />
      </TitledContent>
    </Container>
  );
}
