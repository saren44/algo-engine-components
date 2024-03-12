
export interface IStyledConsoleProps {
  $theme: ThemeType;
}


export interface IConsoleProps {
  theme?: ThemeType;
  data: Array<ConsoleData>;
}

export interface IConsoleLineProps {
  data: ConsoleData;
}

export interface ConsoleData {
  timestamp?: string;
  text: string;
  logType: LogType
}

export type ConsoleDisplayType = LogType | 'all';

export type LogType = 'log' | 'warn' | 'error'

export type ThemeType = 'dark' | 'light';