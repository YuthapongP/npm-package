import type { Meta, StoryObj } from "@storybook/react";

import { EllipsisLoaderWavering, EllipsisLoaderWaveringProps } from "..";

import { ThemeProvider, GlobalStyles } from "../components/common/Provider";

import {
  summerThemeTokens,
  darkThemeTokens,
  lightThemeTokens,
  springThemeTokens,
} from "../components/common";
const meta2: Meta<EllipsisLoaderWaveringProps> = {
  title: "EllipsisLoaderWavering",
  component: EllipsisLoaderWavering,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      autodocs: "tag",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variants: {
      options: ["dark", "light", "spring", "summer"],
      description: "'dark', 'light', 'spring', 'summer'",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "light" },
        options: ["dark", "light", "spring", "summer"],
      },
    },
    bgColor: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<EllipsisLoaderWaveringProps>;

export { meta2 as DefaultThemeTokens };

const meta: Meta<EllipsisLoaderWaveringProps> = {
  title: "Example/EllipsisLoaderWavering",
  component: EllipsisLoaderWavering,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    bgColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<EllipsisLoaderWaveringProps>;

const createStoryForTheme = (themeTokens: any) => {
  return (args: { bgColor?: string }) => {
    const { colors } = themeTokens;

    // const combinedColors = {
    //   ...colors,
    //   ...(args.bgColor ? { primary: args.bgColor } : {}),
    // };

    const combinedColors = args.bgColor ?? colors.primary.main;
    return (
      <ThemeProvider>
        <GlobalStyles />
        <EllipsisLoaderWavering bgColor={combinedColors} />
      </ThemeProvider>
    );
  };
};

export const Summer: Story = {
  render: createStoryForTheme(summerThemeTokens),
  argTypes: {
    variants: { table: { disable: true } },
  },
};

export const Spring: Story = {
  render: createStoryForTheme(springThemeTokens),
  argTypes: {
    variants: { table: { disable: true } },
  },
};

export const Dark: Story = {
  render: createStoryForTheme(darkThemeTokens),
  argTypes: {
    variants: { table: { disable: true } }, // Hide the `variants` control
  },
};

export const Light: Story = {
  render: createStoryForTheme(lightThemeTokens),
  argTypes: {
    variants: { table: { disable: true } }, // Hide the `variants` control
  },
};
