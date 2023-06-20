import React from 'react';
import { SpaceProps, FlexboxProps, LayoutProps } from 'styled-system';
import { StyledBox } from './styles';

export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
  SpaceProps &
  FlexboxProps &
  LayoutProps;

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
