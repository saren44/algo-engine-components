import { StyledStoryWrapper } from "./styles";
import { IStoryWrapperProps } from "./types";


export const StoryWrapper = ({
  width = 400,
  height =  200,
  children,
}: IStoryWrapperProps) => {

  return (
    <StyledStoryWrapper
      $height={height}
      $width={width}
      >
        {children}
      </StyledStoryWrapper>
  )
}