import PlusButton from '@/atoms/board/PlusMinusButton';
import BoardCardBox from '@/organisms/board/BoardCardBox';
import BoardCardList from '@/organisms/board/BoardCardList';
import BoardHeader from '@/organisms/board/BoardHeader';
import { BoardData } from '@/types/board/type';
import { Link } from 'react-router-dom';
import { CardBoxData } from '@/types/board/type';

interface BoardTemplateProps {
  isAdmin: boolean;
  loading: boolean;
  data: BoardData;
  cardBoxData: CardBoxData;
  setExpected: boolean;
  isExpected: boolean;
  isFinished: boolean;
}

const BoardTemplate = ({
  isAdmin,
  loading,
  data,
  cardBoxData,
  setExpected,
  isExpected,
  isFinished,
}: BoardTemplateProps) => {
  return (
    <div className="flex flex-col justify-around min-h-screen bg-no-repeat bg-cover w-xl bg-gradient-to-b from-mainblue to-mainyellow">
      <BoardHeader isAdmin={isAdmin} />
      {loading ? (
        <BoardCardBox
          isAdmin={isAdmin}
          isLoading={loading}
          name={undefined}
          startDate={undefined}
        />
      ) : (
        cardBoxData && (
          <BoardCardBox
            uuid={cardBoxData.uuid}
            imageSrc={cardBoxData.imageFileInfo?.fileUrl}
            name={cardBoxData.name}
            startDate={cardBoxData.startDate}
            remainingTime={cardBoxData.remainingTime}
            isAdmin={isAdmin}
            isLoading={loading}
          />
        )
      )}
      {isAdmin && (
        <Link to="/admin/event/create" className="fixed right-5 bottom-5 z-50">
          <PlusButton />
        </Link>
      )}
      {isExpected ? (
        <p className="t3b text-center lg:my-14 sm:my-6 text-white">예정</p>
      ) : (
        <p className="t3b text-center lg:my-14 sm:my-6 text-white opacity-40">
          예정 없음
        </p>
      )}
      {loading ? (
        <BoardCardList isLoading={loading} isAdmin={isAdmin} />
      ) : (
        data.expected &&
        (setExpected ? (
          <BoardCardList
            meetings={data.expected.slice(1)}
            isAdmin={isAdmin}
            isLoading={loading}
          />
        ) : (
          <BoardCardList
            meetings={data.expected}
            isAdmin={isAdmin}
            isLoading={loading}
          />
        ))
      )}
      {isFinished ? (
        <p className="t3b text-center lg:my-14 sm:my-6 text-white">리마인드</p>
      ) : (
        <p className="t3b text-center lg:my-14 sm:my-6 text-white opacity-40">
          리마인드 없음
        </p>
      )}
      {data.finished && (
        <BoardCardList
          meetings={data.finished}
          isAdmin={isAdmin}
          isLoading={loading}
          isOver={true}
        />
      )}
    </div>
  );
};
export default BoardTemplate;
