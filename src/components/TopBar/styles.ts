import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const TopBarContainer = styled.div<{ testID?: string }>`
  flex: 1;
  display: flex;
  height: 80px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Abel', sans-serif;
    font-size: 50px;
    color: ${colors.secondary};
  }
`;
