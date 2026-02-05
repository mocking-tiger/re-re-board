
export const generateId = () => {
    // generateId 함수는 고유한 문자열 ID를 생성.
    // 1. Date.now()는 현재 시간을 밀리초(ms)로 반환.
    // 2. Math.random()은 0 이상 1 미만의 난수를 반환.
    // 3. Math.random().toString(36)은 난수를 36진수 문자열(숫자+영문 소문자)로 변환(예: '0.123456789abcdef'). 
    // 4. substring(2, 9)는 변환된 문자열에서 앞의 '0.'을 제외하고, 2번째 인덱스부터 8번째 인덱스까지(7글자)를 잘라냄
    // 5. 위 두 값을 하이픈(-)으로 이어 붙여 고유성과 난수성을 가진 ID를 생성.
    return `${Date.now()}-${Math.random().toString(36).substring(2,9)}`
}

export const formatDate = (date:Date)=>{
    // formatDate 함수는 Date 객체를 'YYYY년 M월 D일' 형태의 한글 문자열로 변환.
    // Intl.DateTimeFormat은 국제화(Internationalization)를 위한 내장 객체로, 날짜와 시간을 특정 로케일(언어, 지역)에 따라 다양한 포맷으로 변환할 수 있음.
    // 첫 번째 인자 'ko-KR'은 한국어(대한민국) 로케일을 지정.
    // 두 번째 인자인 옵션 객체에서
    //   - year: 'numeric'는 4자리 연도를,
    //   - month: 'long'은 풀네임(month 이름, 예시: '1월', '2월', ...),
    //   - day: 'numeric'은 일(day) 숫자를 각각 표시.
    // 이렇게 만든 Intl.DateTimeFormat 인스턴스의 .format(date)는
    // 전달받은 date(Date 객체)를 위에서 지정한 포맷과 로케일로 포맷팅해 문자열로 반환.
    // 예: 2023-12-25 => '2023년 12월 25일'.
    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);
}
