import '../styles/main.css';
import { Dispatch, SetStateAction, useEffect} from 'react';
import { REPLFunction, addCommand } from './REPLFunctionUtility';

interface REPLFunctionsProps {
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
  verbose: boolean;
  setVerbose: Dispatch<SetStateAction<boolean>>;
  commandRegistry: Record<string, REPLFunction>;
  setCommandRegistry: Dispatch<SetStateAction<Record<string, REPLFunction>>>;
}

export function REPLFunctions(props: REPLFunctionsProps) {
  useEffect(() => {
    const modeCommand: REPLFunction = () => {
      props.setVerbose(!props.verbose);
      console.log(props.verbose);
      return "Verbose is now " + !props.verbose;
    };
    // Create more commands here!
    props.setCommandRegistry(addCommand("mode", modeCommand, props.commandRegistry))
  }, [props.verbose]);
  return null;
}