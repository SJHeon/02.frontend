import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../asset/delete.svg";

const Tag = styled.div`
  display: flex;
  font-size: 14px;
  border-radius: 16px;
  padding: 6px 10px;
  color: var(--primary);
  background-color: var(--highlight);
  cursor: pointer;
  &:hover {
    background-color: var(--overlay);
  }
  margin: 4px;
`;

const TagLabel = styled.span`
  margin-right: 4px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
//#region 내코드
// const SearchTag = ({ preValueBox, setValueBox, setInputValue }) => {
//   //   console.log(preValueBox);
//   //   console.log(typeof preValueBox);
//   const resetPreValue = () => {
//     setValueBox([]);
//   };
//   const getValue = (e) => {
//     console.log(e.target.innerText);
//     setInputValue(e.target.innerText);
//   };
//   return (
//     <>
//       <Tag>
//         {preValueBox.map((preValue, idx) => {
//           return (
//             <TagLabel key={idx} onClick={getValue}>
//               {preValue}
//             </TagLabel>
//           );
//         })}
//         <DeleteIcon onClick={resetPreValue} width="12px" />
//       </Tag>
//     </>
//   );
// };
//#endregion

const SearchTag = ({ preValueBox, setValueBox, setInputValue }) => {
  return (
    <>
      <Tag>
        <DeleteIcon width="12px" />
      </Tag>
    </>
  );
};

export default SearchTag;
