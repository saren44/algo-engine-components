import type { Meta, StoryObj } from '@storybook/react';
import { FileTree } from './FileTree';
import { wrapComponent } from '../../utils/WrapComponent';
import { fn } from '@storybook/test';
import { mockData } from './types';

const meta = {
  title: 'Components/File tree',
  component: FileTree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  
		files: mockData
  },
  
} satisfies Meta<typeof FileTree>;

export default meta;
type Story = StoryObj<typeof FileTree>;

export const DefaultList: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 300, 400)
    )],
  args: {
		displayType: 'list'
  }
};

export const DefaultGrid: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 300, 400)
    )],
  args: {
    displayType: 'grid'
  }
};

export const ThinnerList: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 150, 200)
    )],
  args: {
    displayType: 'list'
  }
};

export const ThinnerGrid: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 150, 200)
    )],
  args: {
    displayType: 'grid'
  }
};
