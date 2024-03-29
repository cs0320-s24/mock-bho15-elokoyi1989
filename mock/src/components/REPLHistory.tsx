import "../styles/main.css";
import { REPLOutput } from "./REPLOutput";

/*
  This class keeps track of the command and output history.
*/

interface REPLHistoryProps {
  verbose: boolean;
  history: any[];
}

/**
 * Return HTML components for different types of returns.
 * @param props 
 * @returns nothing
 */
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {props.history.map((args, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          {props.verbose ? (
            <div>
              <div>{"Command: " + args[0]}</div>
              <div>
                <REPLOutput verbose={props.verbose} output={args[1]} />
              </div>
            </div>
          ) : (
            <div>
              <REPLOutput verbose={props.verbose} output={args[1]} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}