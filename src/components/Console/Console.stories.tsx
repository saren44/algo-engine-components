import type { Meta, StoryObj } from '@storybook/react';
import { MockComponent } from '../MockComponent/MockComponent';
import { StoryWrapper } from '../StoryWrapper/StoryWrapper';
import { ConsoleComponent } from './Console';
import { ConsoleData, LogType } from './types';

const getRandomLogType = () => {
  const randomizer = Math.random();
  let lt: LogType;
  if (randomizer < 0.5) {
    lt = 'log'
  }
  else if (randomizer < 0.80) {
    lt = 'warn'
  }
  else {
    lt = 'error'
  }
  return lt;
}

const generateMockData = (items: number = 20) => {
  let res:ConsoleData[] = []

  const now = new Date();
  for (let i = 0; i < items; i += 1) {
    const logType = getRandomLogType();
    res.push({
      timestamp: now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0'),
      text: `${logType} short line!`,
      logType
    })
  }
  return res;
}

const meta = {
  title: 'Components/Console',
  component: ConsoleComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {      
      options: ['dark', 'light'],
      control: { type: 'radio' },}
  },
  args: {  
    theme: 'light',
    data: generateMockData(),
  },
  
} satisfies Meta<typeof ConsoleComponent>;

export default meta;
type Story = StoryObj<typeof MockComponent>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    )
  ],
  args: {
    
  }
};
