import { Dispatch, SetStateAction, useEffect } from "react";

/*
  This class has the functions to create the command registry and add functions to it.
*/

interface REPLCommandUtilityProps {
  commandRegistry: Record<string, REPLFunction>;
  setCommandRegistry: Dispatch<SetStateAction<Record<string, REPLFunction>>>;
}

/*
  An interface that any function that can be added to the command registry must implement.
*/
export interface REPLFunction {
  (args?: string[]): string | string[][];
}

/*
  This function runs once, and creates the command registry.
*/
export function createCommandRegistry(props: REPLCommandUtilityProps) {
  useEffect(() => {
    const commandRegistry: Record<string, REPLFunction> = {};
    props.setCommandRegistry(commandRegistry);
  }, []); // Empty dependency array ensures this effect runs only once
  return null; // Since this component doesn't render anything, return null
}

/*
  This function adds a command to the command registry
*/
export function addCommand(
  commandName: string,
  command: REPLFunction,
  commandRegistry: Record<string, REPLFunction>
) {
  commandRegistry[commandName] = command;
  return commandRegistry;
}
