/* eslint-disable func-style */
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

type IComponent = ComponentStory<typeof Button>;

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: IComponent = args => <Button {...args} icon />;

export const Primary = Template.bind({});
Primary.args = {
  theme: "primary",
  children: "Button Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: "secondary",
  children: "Button Secondary",
};

export const Link = Template.bind({});
Link.args = {
  theme: "link",
  children: "Button Link",
};
