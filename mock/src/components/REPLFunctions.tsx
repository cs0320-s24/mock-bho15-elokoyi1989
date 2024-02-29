import "../styles/main.css";
import { Dispatch, SetStateAction, useEffect } from "react";
import { REPLFunction, addCommand } from "./REPLFunctionUtility";

interface REPLFunctionsProps {
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
  verbose: boolean;
  setVerbose: Dispatch<SetStateAction<boolean>>;
  filepath: string;
  mockData: Record<string, Array<any>> | undefined;
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
      props.setFilepath(filepath[0]);
      if ((filepath[0] = "MockData1")) {
      }
      return "This csv file:" + filepath[0] + "is now loaded.";
    };

    const searchCommand: REPLFunction = (args: string[] | undefined) => {
      if (!args || args.length < 2) {
        return "Please provide both column and value for the search.";
      }
      const [column, value] = args;
      if (!column || !value) {
        return "Please provide both column and value for the search.";
      }

      // TODO: Perform the search based on the provided column and value
      return "Search command was well-formed but data was not mocked.";
    };

    // Add more commands here!
    props.setCommandRegistry(
      addCommand("mode", modeCommand, props.commandRegistry)
    );
    props.setCommandRegistry(
      addCommand("load_file", loadCommand, props.commandRegistry)
    );
    props.setCommandRegistry(
      addCommand("search", searchCommand, props.commandRegistry)
    );
  }, [props.verbose]);
  return null;
}
