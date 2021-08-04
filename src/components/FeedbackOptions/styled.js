import styled from "styled-components";

const Button = styled.button`
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  color: white;
  background: transparent;
  font-weight: 600;

  &.good {
    color: green;

    &:active {
      background-color: green;
    }
  }

  &.neutral {
    color: gray;

    &:active {
      background-color: gray;
    }
  }

  &.bad {
    color: red;

    &:active {
      background-color: red;
    }
  }

  &:active {
    color: white;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

const Li = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export { Button, Ul, Li };
