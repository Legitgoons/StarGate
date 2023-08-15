import { MeetingData } from '@/types/event/type';

const MeetingLeftDetail = ({ formData }: { formData: MeetingData }) => {
  const start = formData.startDate;
  const [year, month, dayWithTime] = start.split('-');
  const day = dayWithTime.split('T')[0]; // "T"를 기준으로 분리하여 일자만 추출
  const newDate: Date = new Date(Number(year), Number(month) - 1, Number(day));
  const stringDate: string = newDate.toISOString().slice(0, -1);
  const picSec = formData.photoNum * 10;

  return (
    <div className="mb-2 w-full flex flex-col text-white font-suit text-14">
      <p>시작 날짜</p>
      <p>{stringDate}</p>
      <p>대기 시간</p>
      <p>{formData.waitingTime}</p>
      <p>미팅 시간</p>
      <p>{formData.meetingTime}</p>
      <p>촬영 컷 수</p>
      <p>{formData.photoNum}</p>
      <div className="mb-2">
        연예인 1명의 미팅 시간은 사인회 시간 {formData.meetingTime - picSec}
        초와 촬영 시간 {picSec}초를 더한 {formData.meetingTime}초입니다.
      </div>
      <p>그룹</p>
      <p>{formData.groupName}</p>
      <p className="mt-2">멤버</p>
      <table>
        <tbody>
          {formData.meetingMembers.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.roomId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingLeftDetail;
