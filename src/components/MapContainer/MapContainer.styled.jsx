import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const MapContainerWrapper = styled.div`
  flex: 1;
  margin-left: ${(props) => (props.isSideBarOpened ? "320px" : "0")}; /* SideBar의 너비와 여백 포함 */
  transition: margin-left 0.3s ease;
`;

export const DisPlayAddress = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 1000;
  padding: 10px;
`;

export const ResetBtn = styled.button`
  right: 0;
  position: absolute;
  z-index: 9;
`;

export const Popup = styled.div`
  position: absolute;
  transform: translate(-50%, -100%);
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
