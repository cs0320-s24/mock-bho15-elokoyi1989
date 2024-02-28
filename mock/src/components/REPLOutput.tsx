interface REPLOutputProps {
  verbose: boolean;
  output: string | string[][];
}

export function REPLOutput(props: REPLOutputProps) {
  if (typeof props.output === "string") {
    return (
      <div>
        {props.output.split("\n").map((line, lineIndex) => (
          // Render each line as a separate <p> element
          <p key={lineIndex}>{line}</p>
        ))}
      </div>
    );
  } else if (Array.isArray(props.output)) {
    console.log("cheers mate");
    console.log(props.output);
    return (
      <div>
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
