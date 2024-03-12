import { StyledMockComponent } from "./styles";
import { IMockComponentProps } from "./types";

/**
 * Mock component template
 * 
 */
export const MockComponent = ({
  label = 'hello',
  color = 'green'
}: IMockComponentProps) => {

  return(
    <StyledMockComponent $color={color}>
      {label}
    </StyledMockComponent>
  )
}