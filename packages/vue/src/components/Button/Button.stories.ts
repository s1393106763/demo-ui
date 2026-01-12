import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    default: "Vue Primary Button",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    default: "Vue Secondary Button",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
};
