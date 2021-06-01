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
          background: ${colors.background};
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
      max-width: 28rem;

      section {
        h1 {
          font-size: 2rem;
        }

        div {
          button {
            font-size: 0.75rem;
            width: 13rem;
          }
        }
      }
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;

    main {
      max-width: 100%;

      section {
        h1 {
          max-width: 80%;
          font-size: 4rem;
        }

        div {
          justify-content: flex-start;

          button {
            width: 15rem;
            font-size: 1rem;

            & + button {
              margin-left: 2rem;
            }
          }
        }
      }
    }

    img {
      margin-top: 4.28rem;
      max-width: 100%;
      width: 100%;
    }
  }

  @media (max-width: 730px) {
    main {
      section {
        h1 {
          font-size: 3rem;
        }
      }
    }
  }
`;
