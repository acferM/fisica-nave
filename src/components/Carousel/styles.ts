import styled, { css } from 'styled-components';
import { colors } from '../../styles/theme';

interface ContainerProps {
  controlColor: 'green' | 'white';
}

interface PaginationButtonProps {
  selected: boolean;
}

interface CarouselItemProps {
  background?: string;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 3.375rem;
  width: 100%;
  position: relative;

  > button {
    ${props =>
      props.controlColor === 'green' &&
      css`
        background: ${colors.green.dark};
      `}

    ${props =>
      props.controlColor === 'white' &&
      css`
        background: #fff;
      `}

    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 50%;
    width: 3.375rem;
    height: 3.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - 3.375rem);

    &#previous {
      left: -1.6875rem;
    }

    &#next {
      right: -1.6875rem;
    }
  }

  div#items {
    display: flex;

    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
`;

export const CarouselItem = styled.div<CarouselItemProps>`
  flex: none;
  width: calc(33.33% - 1.25rem);
  scroll-snap-align: start;
  background: url(${props => props.background});
  background-size: cover;

  & + & {
    margin-left: 1.875rem;
  }

  div {
    opacity: 0;
    height: 18.75rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    transition: opacity 0.3s;

    display: flex;
    align-items: flex-end;
    padding: 2.875rem 0.875rem;

    &:hover {
      opacity: 1;
    }

    h1 {
      font-family: Rubik;
      font-size: 1.625rem;
      font-weight: 700;
      color: ${colors.background};
    }
  }
`;

export const PaginationContainer = styled.footer`
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.button<PaginationButtonProps>`
  height: 1.25rem;
  width: 1.25rem;
  border: 2px solid ${colors.green.dark};
  border-radius: 50%;

  ${props =>
    props.selected &&
    css`
      background: ${colors.green.dark};
    `}

  & + & {
    margin-left: 1rem;
  }
`;
