import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const MovieCardContainer = styled.div`
  display: flex;
  background-color: ${colors.background};
  transition: all 0.2s ease-in-out;

  div {
    flex: 1;
  }

  img {
    width: 150px;
    contain: content;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.4);
    transform: scale(1.02);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;

export const MovieCardHeader = styled.div`
  h2 {
    display: flex;
    flex-direction: row;
    background-color: ${colors.primary};
    flex: 1;
    font-family: 'Abel', sans-serif;
    font-size: 40px;
    color: ${colors.secondary};
    background-color: ${colors.primary};
    padding: 10px 10px 10px 100px;
  }
  p {
    font-family: 'Abel', sans-serif;
    color: ${colors.textLight};
    font-size: 20px;
    padding: 0px 0 0 100px;
  }
`;

export const VoteAverage = styled.p`
  font-family: 'Abel', sans-serif;
  font-size: 20px;
  color: ${colors.secondary};
  background-color: ${colors.primary};
  width: 60px;
  height: 60px;
  border: 4px solid ${colors.secondary};
  border-radius: 30px;
  text-align: center;
  line-height: 55px;
  margin-top: -65px;
  margin-left: 20px;
  outline: 3px solid ${colors.primary};
`;

export const MovieCardBody = styled.div`
  padding: 20px 40px 20px 20px;
  p {
    font-family: 'Lato', sans-serif;
    color: ${colors.text};
  }
`;

export const MovieCardFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 40px 20px 20px;

  span {
    font-family: 'Abel', sans-serif;
    color: ${colors.primary};
    background-color: ${colors.textInverted};
    border: 1px solid ${colors.primary};
    border-radius: 20px;
    line-height: 20px;
    padding: 5px 10px;
    margin-right: 10px;
  }
`;
