// DEPENDENCIES
import styled from "styled-components";
import { Link } from "react-router-dom";

export const PodcastItemContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 15px;
  width: 150px;
  height: auto;
  position: relative;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const Img = styled.img`
  position: absolute;
  top: -30px;
  border-radius: 50%;
  width: 65px;
  height: 65px;
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 6px;
  text-align: center;
`;

export const Author = styled.p`
  color: grey;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  margin: 0;
`;
