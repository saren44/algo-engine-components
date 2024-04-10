import type { Meta, StoryObj } from '@storybook/react';
import { wrapComponent } from '../../utils/WrapComponent';
import { fn } from '@storybook/test';
import { mockData } from './types';
import { FileTreeView } from './FileTreeNew';

const meta = {
  title: 'Components/File tree view',
  component: FileTreeView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  
		files: mockData,
		onFileSelection: fn()
  },
  
} satisfies Meta<typeof FileTreeView>;

export default meta;
type Story = StoryObj<typeof FileTreeView>;

export const DefaultList: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 300, 400)
    )],
};

export const DefaultGrid: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 300, 400)
    )],
};

export const ThinnerList: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 150, 200)
    )],
};

export const ThinnerGrid: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 150, 200)
    )],
};
