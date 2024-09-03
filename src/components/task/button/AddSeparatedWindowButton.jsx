import React from 'react'
import {v4 as uuid} from 'uuid'


const AddSeparatedWindowBottun = ({separatedWindowsList, setSeparatedWindowsList}) => {
    const addSeparatedWindow = () => {
      const separatedWindowId = uuid();
      // SeparatedWindowを追加する
      setSeparatedWindowsList([...separatedWindowsList,
        {
          id:separatedWindowId,
          draggableId: `item${separatedWindowId}`
        },
       ])

        // {separatedWindowsList.map(separatedWindow =>{
        //   console.log(separatedWindow.draggableId);
        // }
        // )}

    }
  return (
    <div className='addSeparatedWindowButtonArea'>
      <button className='addSeparatedWindowButton' onClick={addSeparatedWindow}>+</button>
    </div>
  )
}

export default AddSeparatedWindowBottun
