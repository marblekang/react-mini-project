import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
//import SearchPage from "./components/SearchPage";
import ClipPage from "./components/ClipPage";
function App() {
  const [value, setValue] = useState(3);
  const [copyValue, setCopyValue] = useState();
  const [count, setCount] = useState(0);

  const onChange = (e, limit = 500) => {
    setCopyValue(e.target.value);
    let timer = setTimeout(() => {}, limit);

    timer();
  };

  // const onClick = () => {
  //   setCount(count + 1);
  //   console.log(count); //0
  //   setCount(count + 2);
  //   console.log(count); //0
  //   setCount(count + 3);
  //   console.log(count); //0
  //   불필요한 렌더링을 줄이기 위해 하나의 이벤트 내에서 같은 state가 여러번 변경되면 오버라이딩.
  //   마지막 코드만 인식.
  //   이벤트의 실행이 종료되고 나서야 컴포넌트가 리렌더링 되면서 count 값이 반영됨.
  // };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/clip" element={<ClipPage />} />
        <Route path="*" element={<Navigate to="*" />} />
      </Routes>
    </>
  );
}
export default App;

/* setState는 비동기적으로 실행, onChange 이벤트가 일어나는 그 순간의 값이 value
state 에 담기면서 input의 value가 변화되어야 하는데,  input의 value 는 state의 value 값과 같다.



*/
