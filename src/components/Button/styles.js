import styled from "styled-components";

export const Container = styled.button`
  padding: 5px 8px;
  border-radius: 6px;

  background-color: ${(props) =>
    props.backGround === "primary"
      ? "#000"
      : props.backGround === "secondary"
      ? "#f5a5"
      : "#f0f0f0"};
`;
