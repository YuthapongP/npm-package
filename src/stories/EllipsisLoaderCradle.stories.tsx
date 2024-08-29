import type { Meta, StoryObj } from "@storybook/react";

import { EllipsisLoaderCradle, EllipsisLoaderCradleType } from "..";

import { ThemeProvider, GlobalStyles } from "../components/common/Provider";

import {
  summerThemeTokens,
  darkThemeTokens,
  lightThemeTokens,
  springThemeTokens,
} from "../components/common";

const meta2: Meta<EllipsisLoaderCradleType> = {
  title: "EllipsisLoaderWavering",
  component: EllipsisLoaderCradle,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
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
  //Add theme decorator for default style too
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<EllipsisLoaderCradleType>;

export { meta2 as DefaultThemeTokens2 };

const meta: Meta<EllipsisLoaderCradleType> = {
  title: "Example/EllipsisLoadingCradle",
  component: EllipsisLoaderCradle,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    bgColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<EllipsisLoaderCradleType>;

const createStoryForTheme = (themeTokens: any) => {
  return (args: { bgColor?: string }) => {
    const { colors } = themeTokens;

    const combinedColors = args.bgColor ?? colors.primary.main;
    return (
      <ThemeProvider>
        <GlobalStyles />
        <EllipsisLoaderCradle bgColor={combinedColors} />
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
