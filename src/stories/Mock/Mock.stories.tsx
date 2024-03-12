import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MockComponent } from '../../components/MockComponent/MockComponent';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Mock',
  component: MockComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: { control: 'text' },
    color: { control: 'color' }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
  
} satisfies Meta<typeof MockComponent>;

export default meta;
type Story = StoryObj<typeof MockComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    )
  ],
  args: {
    label: 'hello',
    color: 'green'
  }
};
