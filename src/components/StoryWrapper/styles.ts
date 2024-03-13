import styled from 'styled-components'
import { IStyledWrapperProps } from './types'

export const StyledStoryWrapper = styled.div<IStyledWrapperProps>`
  border: 1px solid black;
  width: ${p => p.$width}px;
  height: ${p => p.$height}px;
`