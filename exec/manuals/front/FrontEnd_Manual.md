# Front End 개발 서버 포팅 메뉴얼
## NodeJS
- 버전은 18.16.1
- [NodeJS 설치 링크](https://nodejs.org/download/release/v18.16.1/)

NodeJS 설치 후 프론트엔드 패키지들을 관리해줄 패키지 매니져  
NPM 설치
## NPM
- 버전은 9.5.1
- NodeJS 설치 시 같이 설치됨.

---
## pnpm
- 패키지 매니저 중 하나
- ```npm install -g pnpm``` 으로 전역 설치

## Git Clone 후
Stargate-Fe 디렉토리로 이동 후
- ```pnpm install``` 명령어를 이용해 `package.json` 파일 내의 `dependencies` 에 있는 패키지들을 설치
- 그 후 `pnpm dev || pnpm run dev` 를 통해 로컬 개발 서버 실행

## Build 시
- `pnpm build || pnpm run build` 를 사용해 패키지 매니저를 통해 빌드 진행
- 빌드 하고 나면 루트 디렉토리에 `dist` 디렉토리 생성 후 안에 빌드 파일들 생성

---
## Netlify
- Front 서버는 Netlify 정적 서버에 배포
- 빌드 디렉토리는 `pnpm build` 시 생성되는 `dist` 디렉토리로 설정
- CRA 특성 상 하나의 html을 사용하기에 Netlify 내에서 라우팅 지원해주는 redirects 설정을 위해  
`netlify.toml` 파일 내에 다음 내용 작성 후 같이 배포
```
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
- 환경변수로는 프로젝트 내에서 사용한 환경변수 등록
```
VITE_SERVER_URL=https://www.stargate-a406.kro.kr/api
VITE_WEBSOCKET_URL=wss://www.stargate-a406.kro.kr/api/rtc/
```