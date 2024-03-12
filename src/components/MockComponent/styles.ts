import styled from "styled-components";
import { IStyledMockComponentProps } from "./types";


export const StyledMockComponent = styled.div<IStyledMockComponentProps>`
  width: 100%;
  height: 100%;
  background-color: ${p => p.$color};
`