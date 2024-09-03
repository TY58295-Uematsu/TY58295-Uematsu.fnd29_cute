import React, { useState } from 'react'

const SeparatedWindowTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle,setInputCardTitle] = useState('Title')

  const handleClick = () => {
    setIsClick(true);
};

const handleChange = (e) => {
  setInputCardTitle(e.target.value);
}
const handleSubmit = (e) => {
  e.preventDefault();         //エンターキー押したとき、画面が更新されなくする。
  setIsClick(false);
}

const handleBlur = () => {
  setIsClick(false);
}

  return (
    <div className='taskCardTitleInputArea' onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit} >
          <input 
          className='taskCardTitleInput'
            type="text" 
            autoFocus
            onChange={handleChange} 
            onBlur={handleBlur} 
            value={inputCardTitle}
            maxLength='10' />
        </form>)
        : <h3>{inputCardTitle}</h3>
        }


    </div>
  )
}

export default SeparatedWindowTitle
