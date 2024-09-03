import React, { useState } from 'react'
// import SeparatedWindowTitle from "./SeparatedWindowTitle";
import SeparatedWindowDeleteButton from "./button/SeparatedWindowDeleteButton";
import UrlInput from "./input/UrlInput";
import { Draggable } from 'react-beautiful-dnd';
// import SearchResult from './SearchResult';
import SearchResultIframe from './SearchResult_0605 copy';


const SeparatedWindow = ({separatedWindowsList,setSeparatedWindowsList,separatedWindow,index}) => {
  const [inputUrl,setInputUrl] = useState("");
  return (
    <Draggable draggableId={separatedWindow.draggableId} index={index}>
      {(provided) => (
        <div 
          className='separatedWindow'
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          >
          <div className='separatedWindowTitleAndSeparatedWindowDeleteButton' >
            <UrlInput inputUrl={inputUrl} setInputUrl={setInputUrl} />
            <SeparatedWindowDeleteButton 
              separatedWindowsList={separatedWindowsList}
              setSeparatedWindowsList={setSeparatedWindowsList}
              separatedWindow={separatedWindow}
              />
          </div> 
        <SearchResultIframe inputUrl={inputUrl}/>
      </div>
      )}
      
    </Draggable>
  );
};

export default SeparatedWindow
