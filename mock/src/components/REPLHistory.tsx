import "../styles/main.css";

interface REPLHistoryProps {
  // TODO: Fill with some shared state tracking all the pushed commands
  history: string[];
  verbose: boolean;
  filepath: string;
}
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {/* This is where command history will go */}
      {/* TODO: To go through all the pushed commands... try the .map() function! */}
      {props.history.map((entry, index) => (
        <div key={index}>
          {/* Split the entry by '\n' to get an array of lines */}
          {entry.split("\n").map((line, lineIndex) => (
            // Render each line as a separate <p> element
            <p key={lineIndex}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
