export interface GroupData {
  groupNo: number;
  name: string;
  members: MemberData[];
}
export interface MemberData {
  memberNo: number;
  name: string;
}
/**
 * @param ongoing => 진행중
 * @param expected => 예정
 * @param finished => 완료
 */

export interface BoardData {
  ongoing: MeetingData[];
  expected: MeetingData[];
  finished: MeetingData[];
}

/**
 * CardBoxData
 * @param uuid => 미팅에 부여되는 고유 번호
 * @param imageSrc => 이미지 api 주소
 * @param title => Box 측면에서 보여줄 사인회 제목
 * @param date => Box 측면에서 보여줄 사인회 날짜
 * @param remainingTime => Box 측면에서 보여줄 남은 시간
 * @param isAdmin => admin 여부에 따라 확인 후 버튼 이름 변경
 */

export interface CardBoxData {
  name: string | undefined;
  startDate: string | undefined;
  uuid?: string;
  imageSrc?: string;
  title?: string;
  date?: string;
  remainingTime?: number;
  isAdmin?: boolean;
}

export interface BoardCardBoxProps extends CardBoxData {
  isLoading: boolean;
}

/**
 * @param uuid => 미팅 구분할 uuid
 * @param remainingTime => 남은 시간(초)
 * @param imageFileInfo => 이미지 정보
 */
export interface MeetingData {
  uuid: string;
  name: string;
  startDate: string;
  remainingTime: number;
  imageFileInfo?: ImageFileInfo;
}
export interface ImageFileInfo {
  filename: string;
  fileUrl: string;
}

export interface UserData {
  email: string;
  password: string;
  name: string;
  nickname: string;
  birthday: string;
  phone: string;
}

export interface AdminData {
  name: string;
  email: string;
  code: string;
}

export interface MeetingMember {
  memberNo: number;
  name: string;
  polaroids: Polaroid[];
  letter: FanLetter;
}
export interface FanLetter {
  no: number;
  contents: string;
  createDate: string;
  editDate: string;
}

export interface Polaroid {
  no: number;
  imageFileInfo: ImageFileInfo;
}
