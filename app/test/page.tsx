export default function Test() {
  const name = "윤승호";

  return (
    <main className="test-page">
      <section className="test-card">
        <p className="badge">TEST VERSION</p>
        <h1 className="title">{name}의 웹페이지 테스트 버전입니다.</h1>
        <p className="description">
          안녕하세요. 저는 <strong>{name}</strong>입니다.
          <span className="blue"> 파란색 글자</span>로 포인트를 준 예시 페이지예요.
        </p>
      </section>
    </main>
  );
}
