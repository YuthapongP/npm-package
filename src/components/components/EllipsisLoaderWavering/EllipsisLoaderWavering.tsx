import React, { CSSProperties } from "react";
import styled, { keyframes } from "styled-components";
import {
  EllipsisDotProps,
  EllipsisLoaderWaveringProps,
} from "./EllipsisLoaderWavering.type";
import { allThemes } from "../../common";

const ellipsis1 = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const EllipsisLoaderWrapper = styled.div<CSSProperties>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const EllipsisContainer = styled.div<CSSProperties>`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 80px;
  height: 20px;
`;

const EllipsisDot = styled.div<EllipsisDotProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) =>
    props.$bgColor || props.theme.colors.text.mainText || "#333"};
  animation: ${ellipsis1} 1.5s infinite;
`;
const EllipsisDot2 = styled.div<EllipsisDotProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) =>
    props.$bgColor || props.theme.colors.text.mainText || "#333"};
  animation: ${ellipsis1} 1.5s infinite 0.1s;
`;
const EllipsisDot3 = styled.div<EllipsisDotProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) => props.$bgColor ?? "#333"};
  animation: ${ellipsis1} 1.5s infinite 0.3s;
`;

const EllipsisLoaderWavering: React.FC<EllipsisLoaderWaveringProps> = ({
  bgColor,
  variants = "light",
}) => {
  const ellipsisColor = bgColor ?? variants;

  return (
    <EllipsisLoaderWrapper>
      <EllipsisContainer>
        <EllipsisDot $bgColor={ellipsisColor} />
        <EllipsisDot2 $bgColor={ellipsisColor} />
        <EllipsisDot3 $bgColor={ellipsisColor} />
      </EllipsisContainer>
    </EllipsisLoaderWrapper>
  );
};

export default EllipsisLoaderWavering;
