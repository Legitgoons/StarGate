import { useEffect } from 'react';
import { BoardData } from '@/types/board/type';

export const useUpdateTime = (
  data: BoardData,
  setData: React.Dispatch<React.SetStateAction<BoardData>>
) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => ({
        ...prevData,
        ongoing: prevData.ongoing.map((meeting) => {
          if (meeting.remainingTime > 0) {
            return {
              ...meeting,
              remainingTime: meeting.remainingTime - 1,
            };
          }
          return meeting;
        }),
        expected: prevData.expected.map((meeting) => {
          if (meeting.remainingTime > 0) {
            return {
              ...meeting,
              remainingTime: meeting.remainingTime - 1,
            };
          }
          return meeting;
        }),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [data, setData]);
};
