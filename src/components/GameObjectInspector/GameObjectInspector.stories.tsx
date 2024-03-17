import type { Meta, StoryObj } from '@storybook/react';
import { GameObjectInspector } from './GameObjectInspector';
import { wrapComponent } from '../../utils/WrapComponent';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Game Object Inspector',
  component: GameObjectInspector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
		name: { control: { type: 'text' }}
  },
  args: {  
		name: 'debug component',
		pos: { x: 10, y: 5},
		onBackgroundAssetSelect: fn()
  },
  
} satisfies Meta<typeof GameObjectInspector>;

export default meta;
type Story = StoryObj<typeof GameObjectInspector>;

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


