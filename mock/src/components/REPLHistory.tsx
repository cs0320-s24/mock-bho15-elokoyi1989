import "../styles/main.css";
import { REPLOutput } from "./REPLOutput";

interface REPLHistoryProps {
  // TODO: Fill with some shared state tracking all the pushed commands
  history: string[];
  verbose: boolean;
}

export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {props.history.map((command, index) => (
        <div key={index}>
          <REPLOutput verbose={props.verbose} output={command} />
        </div>
      ))}
    </div>
  );
}
