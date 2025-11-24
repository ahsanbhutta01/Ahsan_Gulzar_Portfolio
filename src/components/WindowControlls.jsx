import useWindowStore from '#store/window'
import React from 'react'

const WindowControlls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id='window-controls'>
      <div className='close' onClick={()=>closeWindow(target)}>
        <span className='text-black text-2xl relative bottom-3 -right-[1.9px]'>-</span>
      </div>
      <div className='minimize' />
      <div className='maximize' />
    </div>
  )
}

export default WindowControlls