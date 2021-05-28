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
    carouselRef.current.scrollBy(400, 0);
    setCarouselPage(state => (state < 7 ? state + 1 : state));
  }, []);

  const handleCarouselPrevious = useCallback(() => {
    carouselRef.current.scrollBy(-400, 0);
    setCarouselPage(state => (state > 1 ? state - 1 : state));
  }, []);

  const handleSelectCarouselPage = useCallback(
    (page: number) => {
      if (page === carouselPage) return;

      if (page < carouselPage) {
        const distance = carouselPage - page + 1;

        carouselRef.current.scrollBy(-400 * distance, 0);
      } else {
        const distance = page - carouselPage + 1;

        carouselRef.current.scrollBy(400 * distance, 0);
      }

      setCarouselPage(page);
    },
    [carouselPage]
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
              <CarouselItem key={item.id} background={item.source}>
                <div>
                  <h1>{item.title}</h1>
                </div>
              </CarouselItem>
            );
          }

          return 'penis ?';
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
          if (index + 1 < 8) {
            return (
              <PaginationButton
                key={item.id}
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
