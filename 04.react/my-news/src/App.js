import "./App.css";
import axios from "axios";
import NewsList from "./Component/NewsList";
import Categories from "./Component/Categories";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

function App() {
  const { categoryValue } = useParams();
  console.log(categoryValue);
  const [category, setCategory] = useState("");

  const selectCategory = useCallback((category) => {
    setCategory(category);
  }, []);
  return (
    // <div>
    //   <button onClick={getData}>요청</button>
    // </div>
    <>
      <Categories
        // category={category}

        setCategory={setCategory}
        onClick={selectCategory}
      ></Categories>
      <NewsList category={category} categoryValue={categoryValue}></NewsList>
    </>
  );
}

export default App;
