import styled, { css } from 'styled-components';
import { colors, fonts } from '../../styles/theme';

interface ContainerProps {
  controlColor: 'green' | 'white';
}

interface PaginationButtonProps {
  selected: boolean;
}

interface CarouselItemProps {
  background?: string;
  type: 'video' | 'card';
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
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - 3.375rem);

    &#previous {
      left: -0.875rem;
    }

    &#next {
      right: -0.875rem;
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
  scroll-snap-align: start;

  ${props =>
    props.type === 'video' &&
    css`
      width: calc(33.33% - 2rem);
      background: url(${props.background});
      background-size: cover;

      & + & {
        margin-left: 1.875rem;
      }

      div {
        opacity: 0;
        height: 20rem;
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

      @media (max-width: 950px) {
        width: 100%;
      }
    `}

  ${props =>
    props.type === 'card' &&
    css`
      background: ${colors.green.dark};
      height: 20.625rem;
      width: calc(20% - 2rem);
      border-radius: 0.625rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      & + & {
        margin-left: 4rem;
      }

      div {
        margin-top: 5.5rem;

        h1 {
          max-width: 12.5rem;
          color: #fff;
          ${fonts.card};
        }
      }

      button {
        margin-top: 3.125rem;
        width: 13.375rem;
        height: 2.1875rem;
        color: ${colors.green.dark};
        display: flex;
        align-items: center;
        justify-content: center;
        ${fonts.button};
        border: 0;
        border-radius: 0.625rem;
        background: #fff;
      }

      @media (max-width: 950px) {
        width: calc(33% - 2rem);
      }

      @media (max-width: 730px) {
        div {
          h1 {
            font-size: 1.75rem;
          }
        }

        button {
          width: 12rem;
        }
      }

      @media (max-width: 620px) {
        width: calc(50% - 2rem);
      }
    `}
`;

export const PaginationContainer = styled.footer`
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    visibility: hidden;
  }
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
