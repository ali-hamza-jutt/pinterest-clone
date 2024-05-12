import React from 'react';
import styled from 'styled-components';
import Pin from './Pin';

function MainBoard({ images }) {
  return (
    <Wrapper>
      <Container>
        {images.map((image) => (
          <Pin key={image.id} url={image.urls.regular} alt={image.alt_description} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default MainBoard;

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto; // Ensure it grows with content
    margin-top: 15px;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap; // Allows items to wrap
    justify-content: center; // Centers items in the row
    width: 80%;
    background-color: white;
    padding: 8px; // Adds some padding around the items
`;
