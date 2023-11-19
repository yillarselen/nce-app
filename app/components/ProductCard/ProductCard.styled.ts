import styled from "styled-components";
import { IconButton } from "../styles/IconButton.styled";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  display: flex;
  aspect-ratio: 1 / 1.2;
  width: 100%;
  background: #edf2f7;
  flex-shrink: 0;
  border-radius: 1.5rem;
  overflow: hidden;
  margin-bottom: 1rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

export const PriceLabel = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.green};
  padding: 0.25rem 0.625rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.green};
`;

export const ProductTitle = styled.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem;

  h3 {
    margin-bottom: 0.3rem;
    font-size: 1rem;
    font-weight: 600;
  }

  h4 {
    font-size: 0.9rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.gray};
  }
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
