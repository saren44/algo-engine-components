import type { Meta, StoryObj } from '@storybook/react';
import { CodeEditor } from './CodeEditor';
import { wrapComponent } from '../../utils/WrapComponent';

const meta = {
  title: 'Components/Code Editor',
  component: CodeEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  
  },
  
} satisfies Meta<typeof CodeEditor>;

export default meta;
type Story = StoryObj<typeof CodeEditor>;

export const Default: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story)
    )],
  args: {
    
  }
};

export const Wide: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 700, 200)
    )],
  args: {
    
  }
};

