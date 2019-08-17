import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 45%;
  padding: 20px 20px 0 20px;
`;

const StyledH2 = styled.h2`
  font-size: 0.75rem;
  margin-top: 0;
`;

const StyledH3 = styled.h3`
  font-size: 0.65rem;
  margin-top: 0;
`;

export default function CharacterCard(props) {
  return (
    <StyledDiv>
      <StyledH2>Name: {props.episode.name}</StyledH2>
      <StyledH3>Episode: {props.episode.episode}</StyledH3>
      <StyledH3>Air Date: {props.episode.air_date}</StyledH3>
    </StyledDiv>
  );
}
