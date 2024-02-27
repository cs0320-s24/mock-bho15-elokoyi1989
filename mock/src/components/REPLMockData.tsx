import { Dispatch, SetStateAction, useEffect } from "react";

interface REPLMockDataProps {
  mockData: Record<string, Array<any>>;
  setMockData: Dispatch<SetStateAction<Record<string, Array<any>>>>
}

export function createMockData(props: REPLMockDataProps) {
  useEffect(() => {
    const mockData: Record<string, Array<any>> = {
      MockData1: [
        [1, 2, 3, 4, 5],
        ["The", "song", "remains", "the", "same."],
      ],
      MockData2: [
        [1, 2, 3],
        ["The", "song", "remains"],
      ],
      MockData3: [
        [15, 20, 25],
        ["John", "Abby", "Jamaica"],
      ],
    };
    props.setMockData(mockData);
  }, []); // Empty dependency array ensures this effect runs only once
  return null; // Since this component doesn't render anything, return null
}
