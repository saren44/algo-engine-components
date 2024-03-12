import styled from 'styled-components'
import { IStyledWrapperProps } from './types'

export const StyledStoryWrapper = styled.div<IStyledWrapperProps>`
  width: ${p => p.$width}px;
  height: ${p => p.$height}px;
  background-color: red;
`