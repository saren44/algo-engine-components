import type { Meta, StoryObj } from '@storybook/react';
import { ImageImporter } from './ImageImporter';
import { wrapComponent } from '../../utils/WrapComponent';

const meta = {
  title: 'Components/Image importer',
  component: ImageImporter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  
  },
  
} satisfies Meta<typeof ImageImporter>;

export default meta;
type Story = StoryObj<typeof ImageImporter>;

export const Default: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 300, 200)
    )],
  args: {
    
  }
};

export const Taller: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 300, 400)
    )],
  args: {
    
  }
};

export const ThinDefault: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 150, 200)
    )],
  args: {
    
  }
};

export const ThinTall: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 150, 400)
    )],
  args: {
    
  }
};
