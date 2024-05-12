import React from 'react';
import styled from 'styled-components';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.min(10, totalPages); i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      pageNumbers.push(i);
    }
  }

  return (
    <Container>
      {currentPage > 1 && (
        <Button onClick={() => onPageChange(currentPage - 1)}>Prev</Button>
      )}
      {pageNumbers.map(page => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          active={currentPage === page}
        >
          {page}
        </Button>
      ))}
      {currentPage < totalPages && (
        <Button onClick={() => onPageChange(currentPage + 1)}>Next</Button>
      )}
    </Container>
  );
}

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px;
  margin: 0 4px;
  background-color: ${({ active }) => (active ? '#000' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;
