import React from 'react'

const SearchResult = ({inputUrl}) => {

  return (
    <>
      <div className='url' >
        <p className='taskText'>{inputUrl}</p>
          <div className='urlWindow'>

          </div>
      </div>
    </>
  )
}

export default SearchResult
