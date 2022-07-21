const MAIN_TEXT_DATA = [
  {
    count: 50,
    items: [
      {
        id: 1,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '변수',
      },
      {
        id: 2,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '데이터 타입',
      },
      {
        id: 3,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '값의 할당',
      },
      {
        id: 4,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '식별자 네이밍 규칙',
      },
      {
        id: 5,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '리터럴',
      },
      {
        id: 6,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '표현식',
      },
      {
        id: 7,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '세미콜론',
      },
      {
        id: 8,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '표현식인 문',
      },
      {
        id: 9,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '데이터 타입',
      },
      {
        id: 10,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '연산자',
      },
      {
        id: 11,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '제어문',
      },
      {
        id: 12,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '타입변환',
      },
      {
        id: 13,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '단축 평가',
      },
      {
        id: 14,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '객체 리터럴',
      },
      {
        id: 15,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '원시 값과 객체 비교',
      },
      {
        id: 16,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '함수',
      },
      {
        id: 17,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '스코프',
      },
      {
        id: 18,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '전역 변수 문제점',
      },
      {
        id: 19,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: 'let, const키워드 블록 레벨 스코프',
      },
      {
        id: 20,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '프로퍼티 어트리뷰트',
      },
      {
        id: 21,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '생성자 함수에 의한 객체 생성',
      },
      {
        id: 22,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '함수와 일급 객체',
      },
      {
        id: 23,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '프로토타입',
      },
      {
        id: 24,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: 'strict mode',
      },
      {
        id: 25,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '빌트인 객체',
      },
      {
        id: 26,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: 'this',
      },
      {
        id: 27,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '실행 컨텍스트',
      },
      {
        id: 28,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '클로저',
      },
      {
        id: 29,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '클래스',
      },
      {
        id: 30,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: 'ES6 함수의 추가 기능',
      },
      {
        id: 31,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '배열',
      },
      {
        id: 32,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: 'JSX',
      },
      {
        id: 33,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '컴포넌트',
      },
      {
        id: 34,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '이벤트 핸들링',
      },
      {
        id: 35,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: 'DOM에 이름 달기',
      },
      {
        id: 36,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '컴포넌트 반복',
      },
      {
        id: 37,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '컴포넌트 라이프사이클 메서드',
      },
      {
        id: 38,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: 'Hooks',
      },
      {
        id: 39,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '컴포넌트 스타일링',
      },
      {
        id: 40,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '일정 관리 웹 애플리케이션 만들기',
      },
      {
        id: 41,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '컴포넌트 성능 최적화',
      },
      {
        id: 42,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: 'immer를 사용하여 더 쉽게 불변성 유지하기',
      },
      {
        id: 43,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '리액트 라우터로 SPA 개발하기',
      },
      {
        id: 44,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '외부 API를 연동하여 뉴스 뷰어 만들기',
      },
      {
        id: 45,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '리덕스 라이브러리 이해하기',
      },
      {
        id: 46,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle:
          '리덕스를 사용하여 리액트 애플리케이션 상태 관리하기',
      },
      {
        id: 47,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '리덕스 미들웨어를 통한 비동기 작업 관리',
      },
      {
        id: 48,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '코드 스플리팅',
      },
      {
        id: 49,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '서버 사이드 렌더링',
      },
      {
        id: 50,
        mainTextDataImg: '/images/coding.png',
        mainTextDataTitle: '백엔드 프로그래밍: Node.js의 Koa 프레임워크',
      },
    ],
  },
];

export default MAIN_TEXT_DATA;
