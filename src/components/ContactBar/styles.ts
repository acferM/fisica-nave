import styled from 'styled-components';
import { colors, fonts } from '../../styles/theme';

export const Container = styled.footer`
  font-size: 1.3rem;
  margin-top: 11.875rem;
  padding: 0 8.75rem;
  height: 14.375rem;
  width: 100%;
  background: ${colors.green.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 950px) {
    padding: 0 1rem;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const LinksContainer = styled.div`
  span {
    font-family: Rubik;
    color: #fff;
  }

  div {
    margin-top: 1.5625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      svg {
        width: 2.25rem;
        height: 2.25rem;
      }
    }
  }

  @media (max-width: 950px) {
    span {
      font-size: 2rem;
    }

    div {
      a {
        svg {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }

  @media (max-width: 620px) {
    span {
      font-size: 1.625rem;
    }

    div {
      a {
        svg {
          width: 3.25rem;
          height: 3.25rem;
        }
      }
    }
  }
`;

export const EmailContainer = styled.div`
  ${fonts.subtitle}
  font-size: 1.3rem;
  color: #fff;

  p {
    font-weight: 400;
    text-align: center;
  }

  @media (max-width: 620px) {
    font-size: 1.4rem;
    margin-top: 3rem;
  }
`;
