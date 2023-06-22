import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const StyledMovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.cardBackground};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  background-color: ${colors.background};
  flex: 1;
  padding: 10px 40px;

  h1 {
    font-size: 30px;
    font-weight: 200;
    color: ${colors.primary};
    font-family: 'Abel', sans-serif;
  }

  span {
    font-size: 14px;
    font-weight: 100;
    color: ${colors.textLight};
    font-family: 'Lato', sans-serif;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  #details {
    padding: 10px 40px;

    h2 {
      margin-top: 30px;
      font-size: 20px;
      font-weight: 200;
      color: ${colors.primary};
      font-family: 'Abel', sans-serif;
      padding-bottom: 5px;
      border-bottom: 2px solid ${colors.secondary};
    }

    p[role='overview'] {
      font-size: 14px;
      font-weight: 100;
      color: ${colors.text};
      font-family: 'Lato', sans-serif;
      margin-top: 10px;
    }

    div[role='info-detail-row'] {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
      text-align: center;
      grid-gap: 20px;

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h3 {
        font-size: 20px;
        font-weight: 200;
        color: ${colors.primary};
        font-family: 'Abel', sans-serif;
      }

      p {
        font-size: 14px;
        font-weight: 100;
        color: ${colors.text};
        font-family: 'Lato', sans-serif;
      }
    }

    div[role='footer'] {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    p[role='vote-average'] {
      font-family: 'Abel', sans-serif;
      font-size: 30px;
      text-align: center;
      line-height: 70px;
      color: ${colors.secondary};
      background-color: ${colors.primary};
      width: 80px;
      height: 80px;
      border-radius: 40px;
      border: 4px solid ${colors.secondary};
      outline: 3px solid ${colors.primary};
      margin-top: 30px;

      @media (max-width: 930px) {
        margin-top: 10px;
      }
    }

    div[role='movie-genres'] {
      display: flex;
      flex-direction: row;
      margin-top: 30px;

      span {
        font-family: 'Abel', sans-serif;
        color: ${colors.primary};
        background-color: ${colors.textInverted};
        border: 1px solid ${colors.primary};
        height: 30px;
        border-radius: 20px;
        line-height: 20px;
        padding: 5px 10px;
        margin-right: 10px;
      }
    }
  }

  img {
    width: 300px;
    height: 450px;
    object-fit: fill;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
