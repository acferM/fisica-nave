import styled from 'styled-components';
import { colors, fonts } from '../../styles/theme';

export const Container = styled.footer`
  margin-top: 11.875rem;
  padding: 0 8.75rem;
  height: 18.75rem;
  width: 100%;
  background: ${colors.green.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 950px) {
    padding: 0 1rem;
  }
`;

export const LinksContainer = styled.div`
  span {
    font-family: Rubik;
    font-size: 2.8125rem;
    color: #fff;
  }

  div {
    margin-top: 1.5625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`;

export const EmailContainer = styled.div`
  ${fonts.subtitle}
  color: #fff;

  p {
    font-weight: 400;
    text-align: center;
  }
`;
