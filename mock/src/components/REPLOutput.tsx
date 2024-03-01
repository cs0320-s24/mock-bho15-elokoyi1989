interface REPLOutputProps {
  verbose: boolean;
  output: string | string[][];
}

/*
  This class creates separate HTML elements based on the output of the command as well as the verbose state.
*/

export function REPLOutput(props: REPLOutputProps) {
  if (typeof props.output === "string") {
    return (
      <div>
        {props.verbose ? (
          <span> Output: {props.output} </span>
        ) : (
          <span> {props.output} </span>
        )}
      </div>
    );
  } else if (Array.isArray(props.output)) {
    return (
      <div>
        {props.verbose && (
          <div>Output:</div>
        )}
        <table>
          <tbody>
            {props.output.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
}
