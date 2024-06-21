import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  width: 450px;
  padding: 28px;
  border-right: 1px solid var(--color-gray-light);
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--color-white-dark);
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
