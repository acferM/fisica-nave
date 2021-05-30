import { Carousel } from '../components/Carousel';
import { ContactBar } from '../components/ContactBar';
import { SchoolContent } from '../components/SchoolContent';

import { TitledContent } from '../components/TitledContent';

import { Container, Content, Header } from '../styles/pages/Home';

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

const carouselCardContent = [
  'Estática dos\n flúidos',
  'Estática dos\n flúidos',
  'Estática dos\n flúidos',
  'Estática dos\n flúidos',
  'Estática dos\n flúidos',
  'Estática dos\n flúidos',
  'Estática dos\n flúidos',
  'Estática dos\n flúidos',
  'Estática dos\n flúidos',
  'Estática dos\n flúidos',
  'Estática dos\n flúidos',
  'Estática dos\n flúidos',
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

        <SchoolContent id="start" />
      </Content>

      <TitledContent id="projects" title="Projetos" subtitle="E AULAS">
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
      >
        <Carousel
          controlColor="white"
          content={carouselCardContent}
          type="card"
        />
      </TitledContent>

      <ContactBar />
    </Container>
  );
}
