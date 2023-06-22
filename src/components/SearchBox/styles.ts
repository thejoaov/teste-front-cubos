import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const StyledSearchBox = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border: none;
  background-color: ${colors.background};
  font-family: 'Abel', sans-serif;
  padding: 0 5vw 0 5vw;
  font-size: 18px;
  transition: all 0.1s ease-in-out;

  &::placeholder {
    color: ${colors.placeholder};
  }

  &:focus {
    outline: 2px solid ${colors.secondary};
  }
`;
