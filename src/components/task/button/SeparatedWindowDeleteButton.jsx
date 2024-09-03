import React from 'react'

const SeparatedWindowDeleteButton = ({
  separatedWindowsList,
  setSeparatedWindowsList,
  separatedWindow}) => {

  const separatedWindowDeleteButton = (id)=>{
    // taskCardを削除する
    setSeparatedWindowsList(separatedWindowsList.filter((e)=>e.id !== id))
  } 
  return (
    <div>
      <button 
      className='separatedWindowDeleteButton'
      onClick={() => separatedWindowDeleteButton(separatedWindow.id)}>x</button>
    </div>
  )
}

export default SeparatedWindowDeleteButton
