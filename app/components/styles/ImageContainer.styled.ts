import styled from "styled-components";

export const ImageContainer = styled.div<{ width?: string; height?: string }>`
  display: flex;
  aspect-ratio: 1 / 1.2;
  width: ${({ width }) => `${width}rem` || "%100"};
  height: ${({ height }) => `${height}rem` || "auto"};
  background: #edf2f7;
  flex-shrink: 0;
  border-radius: 1.5rem;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
