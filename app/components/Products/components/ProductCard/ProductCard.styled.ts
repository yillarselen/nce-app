import styled from "styled-components";
import { IconButton } from "../../../styles/IconButton.styled";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  position: relative;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;

  span {
    margin-left: 0.35rem;
  }
`;

export const ProductTitle = styled.div`
  margin-top: 0.85rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`;

export const FavButton = styled(IconButton)`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #fff;
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
  transition: background-color 0.5s, transform 0.5s;
  transform-origin: center;

  &:hover {
    transform: scale(1.1);
  }
`;
