/* eslint-disable react/no-array-index-key */
import { useState, useRef, useCallback } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { colors } from '../../styles/theme';

import {
  Container,
  CarouselItem,
  PaginationButton,
  PaginationContainer,
} from './styles';

interface Video {
  id: number;
  source: string;
  title: string;
}

interface CarouselProps {
  controlColor: 'green' | 'white';
  type: 'video' | 'card';
  content: Video[] | string[];
}

export function Carousel({
  content,
  type,
  controlColor,
}: CarouselProps): JSX.Element {
  const [carouselPage, setCarouselPage] = useState(1);

  const carouselRef = useRef<HTMLDivElement>(null);

  const handleCarouselNext = useCallback(() => {
    if (type === 'video') {
      carouselRef.current.scrollBy(400, 0);
      setCarouselPage(state => (state < 8 ? state + 1 : state));
    } else {
      carouselRef.current.scrollBy(200, 0);
      setCarouselPage(state => (state < 9 ? state + 1 : state));
    }
  }, [type]);

  const handleCarouselPrevious = useCallback(() => {
    carouselRef.current.scrollBy(-400, 0);
    setCarouselPage(state => (state > 1 ? state - 1 : state));
  }, []);

  const handleSelectCarouselPage = useCallback(
    (page: number) => {
      if (page === carouselPage) return;

      if (page < carouselPage) {
        if (type === 'video') {
          const distance = carouselPage - page + 1;

          carouselRef.current.scrollBy(-400 * distance, 0);
        } else {
          const distance = carouselPage - page + 1;

          carouselRef.current.scrollBy(-250 * distance, 0);
        }
      } else if (type === 'video') {
        const distance = page - carouselPage + 1;

        carouselRef.current.scrollBy(400 * distance, 0);
      } else {
        const distance = page - carouselPage + 1;

        carouselRef.current.scrollBy(250 * distance, 0);
      }

      setCarouselPage(page);
    },
    [carouselPage, type]
  );

  return (
    <Container controlColor={controlColor}>
      <button type="button" id="previous" onClick={handleCarouselPrevious}>
        <FiChevronLeft
          color={controlColor === 'green' ? '#fff' : colors.green.dark}
          size={32}
        />
      </button>
      <div id="items" ref={carouselRef}>
        {content.map((item, index) => {
          if (type === 'video') {
            return (
              <CarouselItem key={item.id} background={item.source} type={type}>
                <div>
                  <h1>{item.title}</h1>
                </div>
              </CarouselItem>
            );
          }

          return (
            <CarouselItem key={`${index}-${item}`} type={type}>
              <div>
                <svg
                  width="20"
                  height="7"
                  viewBox="0 0 20 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.851166"
                    width="18.5116"
                    height="7"
                    rx="3.5"
                    fill="#69D170"
                  />
                </svg>
                <h1>{item}</h1>
              </div>

              <button type="button">CONFERIR CONTEÚDOS</button>
            </CarouselItem>
          );
        })}
      </div>
      <button type="button" id="next" onClick={handleCarouselNext}>
        <FiChevronRight
          color={controlColor === 'green' ? '#fff ' : colors.green.dark}
          size={32}
        />
      </button>

      <PaginationContainer>
        {content.map((item, index) => {
          if (type === 'video' && index + 1 < 9) {
            return (
              <PaginationButton
                key={index}
                selected={carouselPage === index + 1}
                type="button"
                onClick={() => handleSelectCarouselPage(index + 1)}
              />
            );
          }
          if (type === 'card' && index + 1 < 10) {
            return (
              <PaginationButton
                key={`-${index}-`}
                selected={carouselPage === index + 1}
                type="button"
                onClick={() => handleSelectCarouselPage(index + 1)}
              />
            );
          }

          return '';
        })}
      </PaginationContainer>
    </Container>
  );
}
