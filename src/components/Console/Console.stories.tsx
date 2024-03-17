import type { Meta, StoryObj } from '@storybook/react';
import { MockComponent } from '../MockComponent/MockComponent';
import { StoryWrapper } from '../StoryWrapper/StoryWrapper';
import { ConsoleComponent } from './Console';
import { ConsoleData, LogType } from './types';
import { wrapComponent } from '../../utils/WrapComponent';

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

const getRandomLogLength = () => {
	const randomizer = Math.random();
	let message: string;
	if (randomizer < 0.6) {
		message = "short line";
	}
	else {
		message = "a long line without any meaning whatsoever, except for checking multiline logs."
	}
	return message;
}

const generateMockData = (items: number = 20) => {
  let res:ConsoleData[] = []

  const now = new Date();
  for (let i = 0; i < items; i += 1) {
    const logType = getRandomLogType();
		const logMessage = getRandomLogLength();
    res.push({
      timestamp: now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0'),
      text: `${logType}: ${logMessage}`,
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
