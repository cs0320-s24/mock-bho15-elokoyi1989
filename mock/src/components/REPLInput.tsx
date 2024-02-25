import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import { getOutputForCommand } from './mockData'
import { REPLFunction } from './REPLFunctions';

interface REPLInputProps{
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
  verbose: boolean;
  setVerbose: Dispatch<SetStateAction<boolean>>;
  commandRegistry: Record<string, REPLFunction>;
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {
    // Remember: let React manage state in your webapp. 
    // Manages the contents of the input box
    const [commandString, setCommandString] = useState<string>('');
    const [count, setCount] = useState<number>(0);

    function handleSubmit(commandString: string) {
      // Split up input string into command and arguments
      var commandWithArgs = commandString.split(" ");
      const [commandKeyword, ...args] = commandWithArgs;
      var output = ""
      setCount(count + 1);
      const command = props.commandRegistry[commandKeyword];
      if (command === undefined) {
        output = "Command was not found.";
      } else {
        // output = command(args);
      }
      
      if (props.verbose === false) {
        // Since props.setVerbose is called after the handle, we want to pass in the opposite
        props.setHistory([...props.history, getOutputForCommand(commandString, !props.verbose)]);
      } else {
        props.setHistory([...props.history, 
          "Command: " + commandString + "\n" + "Output: " + 
          getOutputForCommand(commandString, props.verbose)]);
      }
      
      setCommandString("");
    }
    // TODO: Once it increments, try to make it push commands... Note that you can use the `...` spread syntax to copy what was there before
    // add to it with new commands.
    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    return (
        <div className="repl-input">
            {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
            {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
            <fieldset>
              <legend>Enter a command:</legend>
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
            {/* TODO WITH TA: Build a handleSubmit function that increments count and displays the text in the button */}
            {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
            <button aria-label={'Submit'} onClick={() => handleSubmit(commandString)}>Submitted {count} times</button>
        </div>
    )
  }