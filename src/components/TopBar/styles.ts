import styled from 'styled-components';

export const TopBarContainer = styled.div<{ testID?: string }>`
  flex: 1;
  display: flex;
  height: 80px;
  background-color: #116193;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Abel', sans-serif;
    font-size: 50px;
    color: #06dfdf;
  }
`;
