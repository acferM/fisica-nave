import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const Container = styled.div`
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
