import { CSSProperties } from "react";

export type CSSPropertyValueCradle<T extends keyof CSSProperties> =
  CSSProperties[T];

export interface DotsTypes extends CSSProperties {
  $bgColor: CSSPropertyValueCradle<"background">;
}

export type CradleVariantTokens = "dark" | "light" | "summer" | "spring";

export type EllipsisLoaderCradleType = {
  bgColor?: CSSPropertyValueCradle<"color">;
  variants?: CradleVariantTokens;
};
