import { useState } from "react";
import styled from "styled-components";
import arrow from "./../images/arrow.svg";

const StyledContainer = styled.div`
  padding: 1rem 0;
  cursor: pointer;
`;

const StyledArrowImage = styled.img`
  width: 1.5rem;
  transform: rotate(180deg);
  transition: all 0.3s ease-out;
`;

export interface ArrowProps {
  onClick: () => void;
  rotated: boolean;
}

export default function Arrow({ onClick, rotated }: ArrowProps) {
  const [isRotated, setRotated] = useState(rotated);
  const handleClick = () => {
    setRotated(!isRotated);
    onClick();
  };
  console.log(isRotated);
  return (
    <StyledContainer onClick={() => handleClick()}>
      <StyledArrowImage
        src={arrow}
        style={{ transform: isRotated ? "rotate(180deg)" : "rotate(0deg)" }}
      ></StyledArrowImage>
    </StyledContainer>
  );
}
