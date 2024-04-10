import type { Meta, StoryObj } from '@storybook/react';
import { wrapComponent } from '../../utils/WrapComponent';
import { fn } from '@storybook/test';
import { TileInspector } from './TileInspector';
import { IGameObject } from './types';

const mockComponents: Array<IGameObject> = [
	{name: 'player', background: {name: 'mockBg1', content: ''}},
	{name: 'coin', background: {name: 'mockBg2', content: ''}},
	{name: 'background', background: {name: 'mockBg3', content: ''}},
]

const meta = {
  title: 'Components/Tile Inspector',
  component: TileInspector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {  
		pos: { x: 10, y: 5},
		onGameObjectClick: fn(),
		objects: mockComponents
  },
  
} satisfies Meta<typeof TileInspector>;

export default meta;
type Story = StoryObj<typeof TileInspector>;

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


