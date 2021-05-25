import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { TitledContent } from '../components/TitledContent';

import {
  Container,
  Content,
  Header,
  SchoolContent,
  CarouselWrapper,
  CarouselItem,
} from '../styles/pages/Home';

export default function Home(): JSX.Element {
  const carouselRef = useRef<HTMLDivElement>(null);

  function handleCarouselNext(): void {
    carouselRef.current.scrollBy(400, 0);
  }

  function handleCarouselPrevious(): void {
    carouselRef.current.scrollBy(-400, 0);
  }

  return (
    <Container>
      <img src="robot.svg" alt="Robot" />
      <Content>
        <Header>
          <img src="logo.jpg" alt="NAVE logo" />
          <nav>
            <p>INICIO</p>
            <p>PROJETOS</p>
            <p>CONTEÚDOS</p>
            <p>CONTATO</p>
          </nav>
        </Header>

        <SchoolContent>
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
        title="Projetos"
        subtitle="E AULAS"
        containerStyle={{
          marginTop: '11.875rem',
          paddingLeft: '8.75rem',
          paddingRight: '8.75rem',
        }}
      >
        <CarouselWrapper>
          <button type="button" id="previous" onClick={handleCarouselPrevious}>
            <FiChevronLeft color="#fff" size={32} />
          </button>
          <div id="items" ref={carouselRef}>
            <CarouselItem>
              <div />
            </CarouselItem>
            <CarouselItem>
              <div />
            </CarouselItem>
            <CarouselItem>
              <div />
            </CarouselItem>
            <CarouselItem>
              <div />
            </CarouselItem>
            <CarouselItem>
              <div />
            </CarouselItem>
            <CarouselItem>
              <div />
            </CarouselItem>
            <CarouselItem>
              <div />
            </CarouselItem>
            <CarouselItem>
              <div />
            </CarouselItem>
          </div>
          <button type="button" id="next" onClick={handleCarouselNext}>
            <FiChevronRight color="#fff" size={32} />
          </button>
        </CarouselWrapper>
      </TitledContent>
    </Container>
  );
}
