import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button.tsx";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: "Hello 🐼",
  },
};
