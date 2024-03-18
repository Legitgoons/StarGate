import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { browserState } from '@/recoil/browserState';
import { BoardData } from '@/types/board/type';
import { fetchUserBoard } from '@/services/userBoardService';
import { fetchAdminBoard } from '@/services/adminBoardService';

export const useFetchBoardData = (isAdmin: boolean) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<BoardData>({
    ongoing: [],
    expected: [],
    finished: [],
  });
  const isV8 = useRecoilValue(browserState);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = isAdmin
        ? await fetchAdminBoard()
        : await fetchUserBoard();
      if (fetchedData) {
        setData(fetchedData);
      }
      setLoading(false);
    };

    if (!isV8) {
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          fetchData();
        }
      };
      fetchData();

      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => {
        document.removeEventListener(
          'visibilitychange',
          handleVisibilityChange
        );
      };
    }
  }, [isV8]);

  return { loading, data, setData };
};
