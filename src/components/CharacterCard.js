import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 45%;
  padding: 10px 0;
`;

const StyledIMG = styled.img`
  width: 100%;
`;

const StyledH2 = styled.h2`
  font-size: 0.75rem;
  margin-top: 0;
`;

export default function CharacterCard(props) {
  return (
    <StyledDiv>
      <StyledIMG src={props.character.image} alt={props.character.name} />
      <StyledH2>Name: {props.character.name}</StyledH2>
    </StyledDiv>
  );
}
