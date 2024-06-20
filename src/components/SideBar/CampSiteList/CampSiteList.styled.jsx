import styled from "styled-components";

export const ListWrapper = styled.div`
  width: auto;
  overflow-y: auto;
  padding: 10px;
  background-color: #f8f9fa;
  border-right: 1px solid #dee2e6;

  h1 {
    margin-bottom: 15px;
    font-size: 1.5em;
    color: #343a40;
  }

  .list-item {
    padding: 5px;
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
      color: #495057;
    }

    p {
      margin: 5px 0;
      color: #868e96;
    }
  }
`;
