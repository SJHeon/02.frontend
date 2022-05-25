import './App.css';
import axios from 'axios';
import NewsList from './Component/NewsList';
import Categories from './Component/Categories';
import { useCallback, useState } from 'react';

function App() {
  const [category, setCategory] = useState('');

  const selectCategory = useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    // <div>
    //   <button onClick={getData}>요청</button>
    // </div>
    <>
      <Categories
        category={category}
        setCategory={setCategory}
        onClick={selectCategory}
      ></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
}

export default App;
