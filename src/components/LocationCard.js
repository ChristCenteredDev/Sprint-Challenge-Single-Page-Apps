import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 45%;
  padding: 10px 0;
`;

const StyledH2 = styled.h2`
  font-size: 0.75rem;
  margin-top: 0;
  margin-bottom: 10px;
`;

const StyledP = styled.p`
  font-size: 0.65rem;
  margin-bottom: 10px;
`;

export default function LocationCard(props) {
  return (
    <StyledDiv className='LocationCard'>
      <StyledH2>Name: {props.location.name}</StyledH2>
      <StyledP>Type: {props.location.type}</StyledP>
      <StyledP>Dimension: {props.location.dimension}</StyledP>
      <StyledP>Residents: {props.location.residents.length}</StyledP>
    </StyledDiv>
  );
}
