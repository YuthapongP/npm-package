import { CSSProperties } from "react";

export type VariantTokens = "dark" | "light" | "summer" | "spring";

export type EllipsisLoaderWaveringProps = {
  bgColor?: CSSPropertyValue<"color">;
  variants?: never;
};

// export type EllipsisLoaderWaveringProps =
//   | {
//       bgColor: CSSPropertyValue<"color">;
//       variants?: never;
//     }
//   | {
//       bgColor?: never;
//       variants: VariantTokens;
//     };

export type EllipsisDotProps = CSSProperties & {
  $bgColor?: CSSPropertyValue<"color">;
};

export type CSSPropertyValue<T extends keyof CSSProperties> = CSSProperties[T];

export interface EllipsisLoaderWrapperType
  extends Record<keyof CSSProperties, CSSProperties[keyof CSSProperties]> {}
