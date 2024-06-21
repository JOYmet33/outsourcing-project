import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5px;
  width: 300px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e9ecef;
  }

  h2 {
    margin: 0;
    font-size: 1.2em;
    font-weight: 600;
    color: #495057;
  }

  p {
    margin: 5px 0;
    font-weight: 500;
    color: #868e96;
  }
`;
