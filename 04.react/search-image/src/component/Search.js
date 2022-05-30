import { useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../asset/search.svg";
import ResultContainer from "./ResultContainer";
import SearchTag from "./SearchTag";

const SearchTagContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  justify-content: center;
`;

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 4px 16px;
  width: 100%;
  align-items: center;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const SearchInputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const SearchInput = styled.input`
  background: transparent;
  font-size: 16px;
  outline: none;
  color: #5e5e5e;
  border: none;
  flex: auto;
  margin-left: 8px;
`;

const RecentSearch = styled.h4`
  margin: 8px 0px;
`;
//#region 내코드
// let preValue = [];
// const Search = ({ setInputValue }) => {
//   const [preValue, setPreValue] = useState([]);
//   const enterKey = (e) => {
//     if (e.keyCode === 13) {
//       // console.log(e.target.value);
//       setInputValue(e.target.value);
//       // preValue = [...preValue, e.target.value];
//       setPreValue([...preValue, e.target.value]);
//       console.log(preValue);
//     }
//   };
//   return (
//     <>
//       <SearchBoxContainer>
//         <SearchInputContainer>
//           <SearchIcon width="24" fill="#5e5e5e" />
//           <SearchInput placeholder="검색 후 ENTER" onKeyDown={enterKey} />
//         </SearchInputContainer>
//       </SearchBoxContainer>
//       <RecentSearch>최근 검색어</RecentSearch>
//       <SearchTagContainer>
//         <SearchTag
//           preValueBox={preValue}
//           setValueBox={setPreValue}
//           setInputValue={setInputValue}
//         />
//       </SearchTagContainer>
//     </>
//   );
// };
//#endregion

const Search = ({ setQuery }) => {
  const inputRef = useRef(null);

  const onSearch = (event) => {
    if (event.key === "Enter") {
      // console.log(event.target.value);
      const currentValue = event.target.value;
      setQuery(currentValue);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <SearchBoxContainer>
        <SearchInputContainer>
          <SearchIcon width="24" fill="#5e5e5e" />
          <SearchInput
            placeholder="검색 후 ENTER"
            ref={inputRef}
            onKeyDown={onSearch}
          />
        </SearchInputContainer>
      </SearchBoxContainer>
      <RecentSearch>최근 검색어</RecentSearch>
      <SearchTagContainer>
        <SearchTag />
      </SearchTagContainer>
    </>
  );
};

export default Search;
