import { Dispatch, SetStateAction, useEffect } from "react";

interface REPLMockDataProps {
  setMockData: Dispatch<SetStateAction<Record<string, Array<any>>>>;
}

export function createMockData(props: REPLMockDataProps) {
  useEffect(() => {
    const mockData: Record<string, string[][]> = {
      StudentData: [
        ["Student", "Major", "Dorm", "Age"],
        ["Ashley", "Mathematics", "New Pem 3", "21"],
        ["Brian", "Geology", "Greg A", "20"],
        ["Colton", "Urban Studies", "Grad Center", "20"],
        ["Derrick", "Art", "Minden", "22"],
        ["Emily", "English", "Metcalf", "19"],
      ],
    };
    props.setMockData(mockData);
  }, []); // Empty dependency array ensures this effect runs only once
  return null; // Since this component doesn't render anything, return null
}

// TODO: Add mock data record for search results
