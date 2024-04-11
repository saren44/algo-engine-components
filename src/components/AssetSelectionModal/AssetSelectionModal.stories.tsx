import type { Meta, StoryObj } from '@storybook/react';
import { wrapComponent } from '../../utils/WrapComponent';
import { fn } from '@storybook/test';
import { mockData } from '../FileTree/types';
import { AssetSelectionModal } from './AssetSelectionModal';
const meta = {
  title: 'Components/Asset selection modal',
  component: AssetSelectionModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  
		files: mockData,
		onConfirmation: fn()
  },
  
} satisfies Meta<typeof AssetSelectionModal>;

export default meta;
type Story = StoryObj<typeof AssetSelectionModal>;

export const Default: Story = {
  decorators: [
    (Story) => (
      wrapComponent(Story, 500, 300)
    )],
};
