import React from 'react'

const SearchResultIframe = ({inputUrl}) => {

  return (
    <>
      <div className='url' >

        <iframe src={inputUrl} className='urlWindow' title='Embedded Page' /> 

      </div>
    </>
  )
}

export default SearchResultIframe
