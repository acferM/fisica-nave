import styled from 'styled-components';
import { colors, fonts } from '../theme';

export const Container = styled.div`
  > img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Content = styled.div`
  padding-top: 2.375rem;
`;

export const Header = styled.header`
  padding: 0 8.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 32.5rem;

    p {
      ${fonts.text}
      position: relative;

      &::after {
        content: '';
        background-color: ${colors.green.dark};
        height: 2px;
        position: absolute;
        bottom: -5px;
        width: 0;
        opacity: 0;
        left: 0;
        transition: width 0.4s, opacity 0.4s;
      }

      &:hover::after {
        width: 100%;
        opacity: 1;
      }
    }
  }
`;

export const SchoolContent = styled.section`
  padding-left: 8.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5.3125rem;

  main {
    max-width: 37.8125rem;

    h1 {
      margin-top: 3px;
    }

    h2 {
      margin-top: 3px;
    }

    div {
      margin-top: 1.875rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        border-radius: 0.625rem;
        width: 16.25rem;
        height: 2.8125rem;

        &:nth-child(1) {
          border: 0;
          background: ${colors.green.dark};
          color: #fff;
        }

        &:nth-child(2) {
          border: 2px solid ${colors.green.dark};
          color: ${colors.green.dark};
          background: transparent;
        }
      }
    }
  }

  img {
    width: 50%;
  }

  @media (max-width: 1500px) {
    main {
      max-width: 35rem;
    }
  }

  @media (max-width: 1360px) {
    img {
      width: 45%;
    }
  }

  @media (max-width: 1200px) {
    main {
      max-width: 33.75rem;

      h1 {
        font-size: 3rem;
      }

      div {
        button {
          font-size: 0.75rem;
          width: 15rem;
        }
      }
    }
  }
`;

export const CarouselWrapper = styled.div`
  margin-top: 3.375rem;
  width: 100%;
  position: relative;

  button {
    background: ${colors.green.dark};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 50%;
    width: 3.375rem;
    height: 3.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    &#previous {
      left: -1.6875rem;
      top: calc(50% - 1.6875rem);
    }

    &#next {
      right: -1.6875rem;
      top: calc(50% - 1.6875rem);
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

export const CarouselItem = styled.div`
  flex: none;
  width: calc(33.33% - 1.25rem);
  scroll-snap-align: start;

  & + & {
    margin-left: 1.875rem;
  }

  div {
    border: 2px solid #000;
    height: 300px;
    background: gray;
  }
`;
