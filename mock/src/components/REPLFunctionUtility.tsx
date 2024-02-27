import { Dispatch, SetStateAction, useEffect } from "react";

/**
 * A command-processor function for our REPL. The function returns a string, which is the value to print to history when
 * the command is done executing.
 *
 * The arguments passed in the input (which need not be named "args") should
 * *NOT* contain the command-name prefix.
 */
interface REPLFunctionUtilityProps {
  commandRegistry: Record<string, REPLFunction>;
  setCommandRegistry: Dispatch<SetStateAction<Record<string, REPLFunction>>>;
}

export interface REPLFunction {
  (args?: string[]): string;
}

export function createCommandRegistry(props: REPLFunctionUtilityProps) {
  useEffect(() => {
    const commandRegistry: Record<string, REPLFunction> = {};
    props.setCommandRegistry(commandRegistry);
  }, []); // Empty dependency array ensures this effect runs only once
  return null; // Since this component doesn't render anything, return null
}

export function addCommand(
  commandName: string,
  command: REPLFunction,
  commandRegistry: Record<string, REPLFunction>
) {
  commandRegistry[commandName] = command;
  return commandRegistry;
}
