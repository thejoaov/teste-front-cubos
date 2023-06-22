import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const StyledPagination = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  button {
    margin: 0 10px;
    border: none;
    background: none;
    font-family: 'Abel', sans-serif;
    font-size: 1.2rem;
    color: ${colors.primary};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${colors.secondary};
      transform: scale(1.2);
    }
  }

  button[aria-selected='true'] {
    color: ${colors.secondary};
    transform: scale(1.3);
    border: 2px solid ${colors.secondary};
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: ${colors.primary};
    outline: 1px solid ${colors.primary};

    &:hover {
      opacity: 0.8;
    }
  }
`;
