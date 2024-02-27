import "../styles/main.css";
import { Dispatch, SetStateAction, useEffect } from "react";
import { REPLFunction, addCommand } from "./REPLFunctionUtility";
import { CSV } from "./CSV";

interface REPLFunctionsProps {
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
  verbose: boolean;
  setVerbose: Dispatch<SetStateAction<boolean>>;
  filepath: string;
  setFilepath: Dispatch<SetStateAction<string>>;
  commandRegistry: Record<string, REPLFunction>;
  setCommandRegistry: Dispatch<SetStateAction<Record<string, REPLFunction>>>;
}

export function REPLFunctions(props: REPLFunctionsProps) {
  useEffect(() => {
    // Create more commands here!
    const modeCommand: REPLFunction = () => {
      props.setVerbose(!props.verbose);
      console.log(props.verbose);
      return "Verbose is now " + !props.verbose;
    };

    const loadCommand: REPLFunction = () => {
      props.setFilepath(props.filepath);
      console.log(props.filepath);
      return "This csv file:" + csvFilePath + "is now loaded.";
    };

    // Add more commands here!
    props.setCommandRegistry(
      addCommand("mode", modeCommand, props.commandRegistry)
    );
    props.setCommandRegistry(
      addCommand("load_file", loadCommand, props.commandRegistry)
    );
  }, [props.verbose]);
  return null;
}
