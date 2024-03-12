import { ReactElement } from "react";

export interface IStoryWrapperProps {
  width?: number;
  height?: number;
  children: ReactElement;
}


export interface IStyledWrapperProps {
  $width: number;
  $height: number;
}
