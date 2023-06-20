import React from 'react';
import { StyledSearchBox } from './styles';

export type SearchBoxProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchBox: React.FC<SearchBoxProps> = (props) => {
  return <StyledSearchBox {...props} />;
};

export default SearchBox;
