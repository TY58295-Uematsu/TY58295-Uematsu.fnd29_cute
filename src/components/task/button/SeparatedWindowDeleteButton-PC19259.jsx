import React from 'react'

const SeparatedWindowDeleteButton = ({
  separatedWindowsList,
  setSeparatedWindowsList,
  separatedWindows}) => {

  const separatedWindowDeleteButton = (id)=>{
    // separatedWindowを削除する
    setSeparatedWindowsList(separatedWindowsList.filter((e)=>e.id !== id))
  } 
  return (
    <div>
      <button 
      className='separatedWindowDeleteButton'
      onClick={() => separatedWindowDeleteButton(separatedWindows.id)}>x</button>
    </div>
  )
}

export default SeparatedWindowDeleteButton
