import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import { REPLFunction } from "./REPLCommandUtility";

interface REPLInputProps {
  history: any[];
  setHistory: Dispatch<SetStateAction<any[]>>;
  verbose: boolean;
  setVerbose: Dispatch<SetStateAction<boolean>>;
  filepath: string;
  setFilepath: Dispatch<SetStateAction<string>>;
  commandRegistry: Record<string, REPLFunction>;
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props: REPLInputProps) {
  // Manages the contents of the input box
  const [commandString, setCommandString] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  function handleSubmit(commandString: string) {
    // Increment the count
    setCount(count + 1);

    // Split up input string into command and arguments
    var commandWithArgs = commandString.toLowerCase().split(" ");
    const [commandKeyword, ...args] = commandWithArgs;

    // Store the output of the command
    var output: string | string[][];
    const command = props.commandRegistry[commandKeyword];
    console.log(command);
    if (command === undefined) {
      output = "Command was not found.";
    } else {
      output = command(args);
    }

    // Appends a list of the command string and the output to the history
    props.setHistory([...props.history, [commandString, output]]);

    // Resets the command string
    setCommandString("");
  }

  return (
    <div className="repl-input">
      {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
      {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>
      {/* TODO WITH TA: Build a handleSubmit function that increments count and displays the text in the button */}
      {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
      <button aria-label={"Submit"} onClick={() => handleSubmit(commandString)}>
        Submitted {count} times
      </button>
    </div>
  );
}
