import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" }, // Light background
        { name: "dark", value: "#333333" }, // Dark background
        { name: "blue", value: "#00f" }, // Custom blue background
      ],
    },
  },
};

export default preview;
