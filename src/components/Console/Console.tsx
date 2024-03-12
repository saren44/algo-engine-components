import { StyledConsole } from "./styles";
import { ConsoleData, IConsoleLineProps, IConsoleProps } from "./types";
import { useCallback, useState } from "react";


const ConsoleLine = ({
  data
}: IConsoleLineProps) => {

  return(
    <div className="loggedLine">
      <p className='timestamp'>
        {data.timestamp}
      </p>
      <p className={`line ${data.logType}`}>
        {data.text}
      </p>
    </div>

  )
}

export const ConsoleComponent = ({
  theme = 'light',
  data,
} : IConsoleProps) => {
  const [shownLogs, setShownLogs] = useState<{log: boolean, warn: boolean, error: boolean}>({log: true, warn: true, error: true})

  const handleToggleLogs = useCallback(() => setShownLogs( shownLogs => ({...shownLogs, log: !shownLogs.log}) ), [])
  const handleToggleWarns = useCallback(() => setShownLogs( shownLogs => ({...shownLogs, warn: !shownLogs.warn}) ), [])
  const handleToggleErrors = useCallback(() => setShownLogs( shownLogs => ({...shownLogs, error: !shownLogs.error}) ), [])

  const prepareData = () => {
    let res: ConsoleData[] = data.filter((el) => {
      let k: keyof typeof shownLogs;
      for (k in shownLogs) {
        if (shownLogs[k] && el.logType === k) {
          return true;
        }
      }
      return false;
    })

    return res;
  }


  return(
  <StyledConsole $theme={theme}>
      <div className='togglesContainer'>
        <button className={`toggleButton ${!shownLogs.log && 'inactive'}`} onClick={handleToggleLogs}> L </button>
        <button className={`toggleButton ${!shownLogs.warn && 'inactive'}`}  onClick={handleToggleWarns}> W </button>
        <button className={`toggleButton ${!shownLogs.error && 'inactive'}`}  onClick={handleToggleErrors}> E </button>
      </div>
    {prepareData().map((el) => (
      <ConsoleLine data={el} />
    ))}
  </StyledConsole>)
}