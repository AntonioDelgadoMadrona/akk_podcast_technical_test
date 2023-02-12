// DEPENDENCIES
import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 20px;
`;

export const SearchBarLabel = styled.span`
  font-size: 15px;
  color: #fff;
  background-color: #1a73e8;
  padding: 5px;
  font-weight: bold;
  border-radius: 10%;
  margin-right: 10px;
`;

export const SearchBarInput = styled.input`
  width: 200px;
  height: 100%;
  border: 1px solid #bdbdbd;
  outline: none;
  font-size: 15px;
  padding: 5px;
  border-radius: 10%;

  &:focus {
    border: 1px solid #1a73e8;
  }
`;

