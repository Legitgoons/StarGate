import BoardTemplate from '@/template/board/BoardTemplate';
import { useFetchData } from '@/hooks/useFetchBoardData';
import { useUpdateTime } from '@/hooks/useUpdateTime';
import { MeetingBoardData } from '@/types/board/type';

const UserBoard = () => {
  const { loading, data, setData } = useFetchData(false);
  useUpdateTime(data, setData);

  /**
   * @const {MeetingData} cardBoxData => CardBox에 넣을 data값 선정
   * @const {boolean} setExpected => CardBox에 Expected[0]이 들어갔는지 확인하는 변수
   * @const {boolean} isExpected => 출력할 expected값이 있는지 확인하는 변수
   * @const {boolean} isFinished => 출력할 finished값이 있는지 확인하는 변수
   */
  const cardBoxData: MeetingBoardData = data.ongoing[0] || data.expected[0];
  const setExpected = cardBoxData === data.expected[0];
  const isExpected =
    (setExpected && data.expected[1] !== undefined) ||
    (setExpected === false && data.expected[0] !== undefined);
  const isFinished = data.finished[0] !== undefined;

  return (
    <BoardTemplate
      isAdmin={false}
      loading={loading}
      data={data}
      cardBoxData={cardBoxData}
      setExpected={setExpected}
      isExpected={isExpected}
      isFinished={isFinished}
    />
  );
};

export default UserBoard;
