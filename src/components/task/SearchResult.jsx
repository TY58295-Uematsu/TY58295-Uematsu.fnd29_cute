import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const SearchResult = ({ inputUrl }) => {
  const [searchResults, setSearchResults] = useState([]);

  const search = async (url) => {
    try {
      // 検索結果を取得する処理を実装する
      const response = await fetch(url);
      const data = await response.json();
      return data.results;
    } catch (error) {
      throw new Error('検索エラーが発生しました。');
    }
  };
  

  useEffect(() => {
    // URLを検索して結果を取得する処理を実行する
    const fetchSearchResults = async () => {
      try {
        // 検索結果を取得する処理を実行
        const results = await search(inputUrl);
        console.log(results)
        setSearchResults(results);
      } catch (error) {
        console.error(error);
      }
    };

    // inputUrlが変更された時に検索結果を取得する
    if (inputUrl !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [inputUrl]);

  // 検索結果を表示する処理
  const renderSearchResults = () => {
    return (
      <>
        {searchResults.length === 0 ? (
          <p>No results found</p>
        ) : (
          searchResults.map((result, index) => (
            <p key={index}>{result}</p>
          ))
        )}
      </>
    );
    
    
  };

  return (
    <>
      <div className="url">
        <p className="taskText">{inputUrl}</p>
          <div className="urlWindow">
            <Routes>
              <Route path="/webpage" element={<iframe src={inputUrl} title="Web Page" />} />
              <Route path="/" element={renderSearchResults()} />
            </Routes>
          </div>
      </div>
    </>
  );
};

export default SearchResult;



// const SearchResult = ({inputUrl}) => {

//   return (
//     <>
//       <div className='url' >
//         <p className='taskText'>{inputUrl}</p>
//       </div>
//       <div className='urlWindow'>
//         <></>
//       </div>
//     </>
//   )
// }

// export default SearchResult
