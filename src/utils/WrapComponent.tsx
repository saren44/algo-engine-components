import { StoryWrapper } from "../components/StoryWrapper/StoryWrapper";

export const wrapComponent = (Story: any, w: number = 400, h: number =  200) => {
  return(
    <StoryWrapper width={w} height={h}>
      <Story />
    </StoryWrapper>
  )
}