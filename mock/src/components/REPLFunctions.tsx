import "../styles/main.css";
import { Dispatch, SetStateAction, useEffect } from "react";
import { REPLFunction, addCommand } from "./REPLFunctionUtility";

interface REPLFunctionsProps {
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
  verbose: boolean;
  setVerbose: Dispatch<SetStateAction<boolean>>;
  filepath: string;
  mockViewData: Record<string, string[][]>;
  mockSearchData: Record<string, string[][]>;
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

    const loadCommand: REPLFunction = (filepath: string[] | undefined) => {
      if (filepath === undefined) {
        return "Filepath was not given as an argument.";
      } else if (filepath.length > 1) {
        return "Only one filepath can be taken in.";
      }
      const csv = props.mockViewData[filepath[0]];
      console.log(props.mockViewData);
      if (csv) {
        props.setFilepath(filepath[0]);
      } else {
        return "Filepath does not exist in the data folder."
      }
      return "This csv file: " + filepath[0] + " is now loaded.";
    };

    const viewCommand: REPLFunction = () => {
      if (props.filepath === undefined) {
        return "Data was not loaded before view.";
      }
      return props.mockViewData[props.filepath];
    };

    const searchCommand: REPLFunction = (args: string[] | undefined) => {
      if (!args || args.length === 2) {
        return "Please provide a column and value for the search.";
      }
      const [column, value] = args;
      const result = props.mockSearchData[props.filepath + " " + column + " " + value];
      if (!result) {
        return "Search command was well-formed but data was not mocked.";
      }

      return result;
    };

    // Add more commands here!
    props.setCommandRegistry(
      addCommand("mode", modeCommand, props.commandRegistry)
    );
    props.setCommandRegistry(
      addCommand("load_file", loadCommand, props.commandRegistry)
    );
    props.setCommandRegistry(
      addCommand("view", viewCommand, props.commandRegistry)
    );
    props.setCommandRegistry(
      addCommand("search", searchCommand, props.commandRegistry)
    );
  }, [props.verbose, props.history, props.filepath, props.mockViewData, props.mockSearchData]);
  return null;
}
