import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 20px;
  overflow-y: auto;
  border-right: 1px solid #e0e0e0;
`;

export const ListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const DetailWrapper = styled.div`
  flex: 2;
  overflow-y: auto;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;
