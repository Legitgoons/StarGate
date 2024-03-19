import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { browserState } from '@/recoil/browserState';
import { BoardData } from '@/types/board/type';

export const useUpdateTime = (
  data: BoardData,
  setData: React.Dispatch<React.SetStateAction<BoardData>>
) => {
  const userAgent = window.navigator.userAgent;
  const delay = userAgent.includes('firefox') ? 985 : 1000;
  const isV8 = useRecoilValue(browserState);

  useEffect(() => {
    if (isV8 && window.Worker) {
      const worker = new Worker('./timerWorker.ts');

      worker.onmessage = () => {
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
      };
      return () => worker.terminate();
    } else {
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
      }, delay);

      return () => clearInterval(interval);
    }
  }, [data, setData, isV8]);
};
