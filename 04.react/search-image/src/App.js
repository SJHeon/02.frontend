import styled from "styled-components";
import SearchContainer from "./component/SearchContainer";
import ResultContainer from "./component/ResultContainer";
import "./App.css";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  background-color: var(--primary);
  min-height: 100vh;
`;

function App() {
  const [inputValue, setInputValue] = useState("");
  //   console.log(inputValue);
  //   console.log(typeof inputValue);
  return (
    <>
      <Container>
        <SearchContainer setInputValue={setInputValue} />
        <ResultContainer inputValue={inputValue} />
      </Container>
    </>
  );
}
export default App;
