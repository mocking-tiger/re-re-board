export const generateId = () => {
  // Math.random().toString(36)은 난수를 36진수 문자열(숫자+영문 소문자)로 변환(예: '0.123456789abcdef').
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
};

export const formatDate = (date: Date) => {
  // Intl.DateTimeFormat은 국제화(Internationalization)를 위한 내장 객체로, 날짜와 시간을 특정 로케일(언어, 지역)에 따라 다양한 포맷으로 변환할 수 있음.
  // 첫 번째 인자 'ko-KR'은 한국어(대한민국) 로케일을 지정.
  // 두 번째 인자인 옵션 객체에서
  //   - year: 'numeric'는 4자리 연도를,
  //   - month: 'long'은 풀네임(month 이름, 예시: '1월', '2월', ...),
  //   - day: 'numeric'은 일(day) 숫자를 각각 표시.
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};
