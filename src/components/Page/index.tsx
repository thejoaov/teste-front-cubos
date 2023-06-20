import React from 'react';
import { SpaceProps } from 'styled-system';
import { StyledPage } from './styles';

export type PageProps = React.HTMLAttributes<HTMLDivElement> & SpaceProps;

const Page: React.FC<PageProps> = ({ children, ...props }) => {
  return <StyledPage {...props}>{children}</StyledPage>;
};

export default Page;
