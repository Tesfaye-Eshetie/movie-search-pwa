import React from 'react'

export default function Comment() {
  return (
    <div className='display-note'>
      <textarea className='display-none'>Note about the movie...</textarea>
      <p className='display-none'><span> Comments: </span> </p>
      <button className=''>View Comment</button>
      <button className='yellow-button display-none'>Edit Comment</button>
    </div>
  )
}
