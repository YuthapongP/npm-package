import { CSSProperties, FC } from "react";
import styled, { keyframes } from "styled-components";
import {
  DotsTypes,
  EllipsisLoaderCradleType,
} from "./EllipsisLoaderCradle.type";

const ellipsis1 = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const ellipsis2 = keyframes`
  0% {
    transform: translateX(-15px);
  }
  50% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(-15px);
  }
`;

const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
  
`;

const EllipsisLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Ellipsis = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  width: 80px;
  height: 20px;
`;

interface EllipsisDots1
  extends Record<keyof CSSProperties, CSSProperties[keyof CSSProperties]> {
  $bgColor?: string;
}

const EllipsisDots1 = styled.div<DotsTypes>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) =>
    props.$bgColor || props.theme.colors.text.mainText || "#003300"};
  animation: ${ellipsis1} 1.5s infinite ease-in-out alternate-reverse;
`;
const EllipsisDots2 = styled.div<DotsTypes>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) =>
    props.$bgColor || props.theme.colors.text.mainText || "#003300"};
  animation: ${ellipsis2} 1.5s infinite ease-in-out alternate-reverse;
`;
const EllipsisDots3 = styled.div<DotsTypes>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) =>
    props.$bgColor || props.theme.colors.text.mainText || "#003300"};
  animation: ${ellipsis3} 1.5s infinite ease-in-out 0.75s alternate-reverse;
`;

const EllipsisLoaderCradle: FC<EllipsisLoaderCradleType> = ({
  bgColor,
  variants,
  ...props
}) => {
  return (
    <EllipsisLoaderContainer {...props}>
      <Ellipsis>
        <EllipsisDots1 $bgColor={bgColor} />
        <EllipsisDots2 $bgColor={bgColor} />
        <EllipsisDots3 $bgColor={bgColor} />
      </Ellipsis>
    </EllipsisLoaderContainer>
  );
};

export default EllipsisLoaderCradle;
