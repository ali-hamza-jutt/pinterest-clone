import React from 'react';
import styled from 'styled-components'; // Import styled-components

function Pin({ url, alt }) {
    return (
      <Wrapper>
        <Container>
          <img src={url} alt={alt || "Image"} />
        </Container>
      </Wrapper>
    );
}

export default Pin;

const Wrapper = styled.div`
    display: inline-flex; // Makes sure pins line up in a row
    padding: 8px; // Gives some space around each pin
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px; // Fixed width for each pin

    img {
        display: block; // Corrects default flex display
        width: 100%; // Makes sure the image fills the container
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover;
    }
`;
