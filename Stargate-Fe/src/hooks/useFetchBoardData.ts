import { useState, useEffect } from 'react';
import { BoardData } from '@/types/board/type';
import { fetchUserBoard } from '@/services/userBoardService';
import { fetchAdminBoard } from '@/services/adminBoardService';

export const useFetchData = (isAdmin: boolean) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<BoardData>({
    ongoing: [],
    expected: [],
    finished: [],
  });

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

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchData();
      }
    };
    fetchData();

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return { loading, data, setData };
};
