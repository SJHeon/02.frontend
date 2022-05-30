import { useEffect, useState } from "react";
import styled from "styled-components";
import getImages from "../api/getImages";
import DummyData from "../asset/dummyData";
import ImageCard from "./ImageCard";
import NotFoundResult from "./NotFoundResult";

const Container = styled.div`
  max-width: 1600px;
  margin: 8px auto;
  padding-right: 8px;
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
//#region 내코드
// const ResultContainer = ({ inputValue }) => {
//   //   const data = DummyData;
//   const [data, setData] = useState({});
//   // console.log(inputValue);
//   useEffect(() => {
//     const fetch = async () => {
//       const data = await getImages(inputValue);
//       setData(data);
//     };
//     fetch();
//   }, [inputValue]);

//   const viewImg = (e) => {
//     console.log(e.target.currentSrc);
//     console.log(e);
//     return <img src={e.target.currentSrc}></img>;
//   };

//   return (
//     <Container>
//       <ResultsWrapper>
//         {data.hits?.map((imgData) => (
//           <ImageCard
//             key={imgData.id}
//             imgData={imgData}
//             onClick={() => {
//               // setImage(!image);
//             }}
//           />
//         ))}
//         <NotFoundResult />
//       </ResultsWrapper>
//     </Container>
//   );
// };

// export default ResultContainer;
//#endregion

const ResultContainer = ({ data }) => {
  console.log(data);
  //   const data = DummyData;
  return (
    <Container>
      <ResultsWrapper>
        {/* {data.total === 0 ? ( */}
        {/* {data.hits && data.hits.length === 0 ? (
          <NotFoundResult />
        ) : (
          data.hits?.map((imgData) => (
            <ImageCard key={imgData.id} imgData={imgData} />
          ))
        )} */}
        {/* {data.hits ? (
          data.hits.map((imgData) => (
            <ImageCard key={imgData.id} imgData={imgData} />
          ))
        ) : (
          <ResultContainer />
        )} */}

        {data.hits?.length > 0 ? (
          data.hits.map((imgData) => (
            <ImageCard key={imgData.id} imgData={imgData} />
          ))
        ) : (
          <NotFoundResult />
        )}

        {/* <NotFoundResult /> */}
      </ResultsWrapper>
    </Container>
  );
};

export default ResultContainer;
