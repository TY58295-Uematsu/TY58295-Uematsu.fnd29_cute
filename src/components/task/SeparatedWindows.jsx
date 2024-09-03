import React, { useState } from 'react'
import SeparatedWindow from './SeparatedWindow'
import AddSeparatedWindowButton from './button/AddSeparatedWindowButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const reorder = (separatedWindowsList, startIndex, endIndex) => {
  // taskを並び替える
  const remove = separatedWindowsList.splice(startIndex, 1);
  separatedWindowsList.splice(endIndex, 0, remove[0]);
};

const SeparatedWindows = () => {
  const [separatedWindowsList,setSeparatedWindowsList] = useState([
    {
    id:"0",
    draggableId:"item0"
    }
  ]);

  console.log(setSeparatedWindowsList.droppableId);

  const handleDragEnd = (result)=>{
    reorder(separatedWindowsList,result.source.index, result.destination.index);
    setSeparatedWindowsList(separatedWindowsList);
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (
          <div 
            className='separatedWindowsArea' 
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {separatedWindowsList.map((separatedWindow, index) => (
              <SeparatedWindow 
                key={separatedWindow.id}
                index={index}
                separatedWindowsList={separatedWindowsList}
                setSeparatedWindowsList={setSeparatedWindowsList}
                separatedWindow={separatedWindow}
                />
            ))}
            {provided.placeholder}
            <AddSeparatedWindowButton
              separatedWindowsList={separatedWindowsList}
              setSeparatedWindowsList={setSeparatedWindowsList}/>
          </div>
        )}

      </Droppable>
    </DragDropContext>
  );
};

export default SeparatedWindows
