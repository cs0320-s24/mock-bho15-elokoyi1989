import { useState } from "react";
import "../styles/main.css";
import { REPLHistory } from "./REPLHistory";
import { REPLInput } from "./REPLInput";
import { REPLFunction, createCommandRegistry } from "./REPLCommandUtility";
import { REPLCommands } from "./REPLCommands";
import { createMockData } from "./REPLMockData";

/* 
  Top level component for the REPL, sets up most states that run through the rest of the program.
*/

export default function REPL() {
  const [history, setHistory] = useState<any[]>([]);
  // Verbose tracks the display mode
  const [verbose, setVerbose] = useState<boolean>(false);
  // Filepath tracks the filepath currently loaded
  const [filepath, setFilepath] = useState<string>("");
  // Mock data records for view and search commands
  const [mockViewData, setMockViewData] = useState<
    Record<string, string[][]>
  >({});
  const [mockSearchData, setMockSearchData] = useState<
    Record<string, string[][]>
  >({});
  // Command registry tracks the commands loaded into the program
  const [commandRegistry, setCommandRegistry] = useState<
    Record<string, REPLFunction>
  >({});

  // Helper functions to fill the mock data
  createMockData({ setMockViewData, setMockSearchData });
  // Creates the command registry to fill in
  createCommandRegistry({ commandRegistry, setCommandRegistry });
  // Fills the registry with desired commands
  REPLCommands({
    history,
    setHistory,
    verbose,
    setVerbose,
    filepath,
    setFilepath,
    mockViewData,
    mockSearchData,
    commandRegistry,
    setCommandRegistry,
  });

  return (
    <div className="repl">
      <REPLHistory history={history} verbose={verbose} />
      <hr></hr>
      <REPLInput
        history={history}
        setHistory={setHistory}
        verbose={verbose}
        setVerbose={setVerbose}
        filepath={filepath}
        setFilepath={setFilepath}
        commandRegistry={commandRegistry}
      />
    </div>
  );
}
