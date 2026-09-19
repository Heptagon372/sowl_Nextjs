import Image from "next/image";
export default function Home() {
  let name = "윤승호";
  return (
    <div>
      <h1 className="title"> {name}의 웹페이지</h1>
      <p className="description">
        안녕하세요. 저는 {name}입니다. <span className="red">빨간색 글자</span>입니다.
      </p>
    </div>
  );
}
