import { Dispatch, SetStateAction, useEffect } from "react";

interface REPLMockDataProps {
  mockData: Record<string, Array<any>>;
  setMockData: Dispatch<SetStateAction<Record<string, Array<any>>>>
}

export function createMockData(props: REPLMockDataProps) {
  useEffect(() => {
    const mockData: Record<string, Array<any>> = {
      StudentData: [
        ["Student", "Major", "Dorm", "Age"],
        ["Ashley", "Mathematics", "New Pem 3", "21"],
        ["Brian", "Geology", "Greg A", "20"],
        ["Colton", "Urban Studies", "Grad Center", "20"],
        ["Derrick", "Art", "Minden", "22"],
        ["Emily", "English", "Metcalf", "19"]
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
