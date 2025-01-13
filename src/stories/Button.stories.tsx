import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

interface ButtonProps {
  className?: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const meta = {
  title: 'UI/Button', // Storybook에서 보여질 경로
  component: Button,
  args: {
    children: 'Button', // 기본 값
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
};

// Destructive Variant
export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

// Outline Variant
export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

// Small Size
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

// Large Size
export const Large: Story = {
  args: {
    size: 'lg',
  },
};

// With asChild Slot
export const WithSlot: Story = {
  args: {
    asChild: true,
    children: <a href="#">Link styled as Button</a>, // Slot 사용 예시
  },
};
