import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  transform: translate(-30%, -84%);
  width: 250px;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 10;

  h2 {
    margin: 0 0 10px;
    font-size: 1.2em;
    color: #343a40;
  }

  p {
    margin: 5px 0;
    color: #495057;
  }

  button {
    display: block;
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 0.9em;
    color: #ffffff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
