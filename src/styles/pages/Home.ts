import styled from 'styled-components';
import { colors, fonts } from '../theme';

export const Container = styled.div`
  > img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media (max-width: 620px) {
    > img {
      width: 90%;
    }
  }
`;

export const Content = styled.div`
  padding-top: 2.375rem;
`;

export const Header = styled.header`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 32.5rem;

    a {
      text-decoration: none;
      ${fonts.text}
      color: #000;
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

  @media (max-width: 1500px) {
    padding-right: 7.5rem;
  }

  @media (max-width: 1440px) {
    padding-right: 6rem;
  }

  @media (max-width: 1360px) {
    padding-right: 2.5rem;

    nav {
      max-width: 30rem;

      a {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 1220px) {
    padding-right: 1.5rem;

    nav {
      max-width: 26.25rem;

      a {
        font-size: 0.975rem;
      }
    }
  }

  @media (max-width: 1220px) {
    padding-right: 1.5rem;

    nav {
      max-width: 24rem;
    }
  }

  @media (max-width: 620px) {
    flex-direction: column;
    align-items: flex-start;

    nav {
      margin-top: 2rem;

      a {
        font-size: 1.2rem;
      }
    }
  }
`;
