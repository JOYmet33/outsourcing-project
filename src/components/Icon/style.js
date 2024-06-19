import styled, {css} from "styled-components";

export const IconStyled = styled.i(({ color }) => {
  return [
    css`
      color: ${color};
      display: inline-flex;
      justify-content: center;
      align-items: center;
    `,
  ];
});