import styled from "styled-components";
import { IStyledConsoleProps } from "./types";


export const StyledConsole = styled.div<IStyledConsoleProps>`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  word-break: break-all;
  font-family: monospace;
  background-color: ${p => p.$theme === 'dark' ? 'black' : 'white'};
  color: ${p => p.$theme === 'dark' ? 'white' : 'black'};
  line-height: 1;
  position: relative;

  .loggedLine {
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    word-break: break-all;
    margin: 0x 0px 0px 10px;
    display: flex;
    flex-direction: row;
  }

  .line {
    margin: 2px 0px 2px 10px;
  }

  .timestamp {
    color: darkgray;
    margin: 2px 0px 2px 0px;
    min-width: 40px;
  }

  .log {

  }

  .warn {
    color: orange;
  }

  .error {
    color: red;
  }

  .togglesWrapper {

  }

  .togglesContainer {
    position: sticky;
    display: flex;
    justify-content: flex-end;
    top: 0px;
    padding-right: 0px;
    background-color: transparent;
    width: 100%;
    height: 0px;
  }

  .toggleButton {
    text-align: center;
    width: 20px;
    height: 20px;
    border: 1px solid green;
    background-color: transparent;
    margin: 15px 15px 0px 0px;
    cursor: pointer;
    transition: opacity 0.5s;
    color: inherit;
  }

  .inactive {
    opacity: 0.3;
  }
`