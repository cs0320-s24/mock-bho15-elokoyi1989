import { Dispatch, SetStateAction, useEffect } from "react";

/*
  This class creates mock data for both the view and search commands.
*/

interface REPLMockDataProps {
  setMockViewData: Dispatch<SetStateAction<Record<string, string[][]>>>;
  setMockSearchData: Dispatch<SetStateAction<Record<string, string[][]>>>;
}

export function createMockData(props: REPLMockDataProps) {
  useEffect(() => {
    // Mock view data is a record from filename to a string[][]
    const mockViewData: Record<string, string[][]> = {
      "student-data.csv": [
        ["Student", "Major", "Dorm", "Age"],
        ["Ashley", "Mathematics", "New Pem 3", "21"],
        ["Brian", "Geology", "Greg A", "20"],
        ["Colton", "Urban Studies", "Grad Center", "20"],
        ["Derrick", "Art", "Minden", "22"],
        ["Emily", "English", "Metcalf", "19"],
      ],
      "coordinates.csv": [
        ["City Name", "Lat", "Long"],
        ["San Francisco", "37", "-120"],
        ["Denver", "40", "-105"],
        ["Providence", "41.8", "-71.25"],
        ["Bangkok", "13.75", "100.5"]
      ]
    };
    // Mock search data is a record from command (in string form) to a string[][]
    const mockSearchData: Record<string, string[][]> = {
      "student-data.csv major art": [
        ["Derrick", "Art", "Minden", "22"],
      ],
      "student-data.csv 3 20": [
        ["Brian", "Geology", "Greg A", "20"],
        ["Colton", "Urban Studies", "Grad Center", "20"],
      ],
      "coordinates.csv city name providence": [
        ["Providence", "41.8", "-71.25"]
      ],
      "coordinates.csv 1 37": [
        ["San Francisco", "37", "-120"]
      ]
    };
    props.setMockViewData(mockViewData);
    props.setMockSearchData(mockSearchData);
  }, []); // Empty dependency array ensures this effect runs only once
  return null; // Since this component doesn't render anything, return null
}
