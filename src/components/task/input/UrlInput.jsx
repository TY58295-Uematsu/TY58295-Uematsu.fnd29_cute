import React from 'react'
// import { v4 as uuid } from 'uuid';

const UrlInput = ({inputUrl, setInputUrl}) => {
  const handleSubmit = (e) => {
    // const taskId = uuid(); 
    e.preventDefault();
    if(inputUrl ===""){return;} 

  }
  const handleChange = (e) => {
    setInputUrl(e.target.value);
  }

  const handleDrop = (e) => {                 //ファイルをドロップしたときに実行
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setInputUrl(droppedFile);
  }

  return (
    <div className='urlframe' onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>

      <form onSubmit={handleSubmit}>
        <input type="text" className='urlInput' placeholder='input URL' onChange={handleChange} value={inputUrl}/>
      </form>
    </div>
  )
}

export default UrlInput
