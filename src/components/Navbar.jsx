import dayjs from 'dayjs'
import { navIcons, navLinks } from '#constants'
import React from 'react'
import useWindowStore from '#store/window'

const Navbar = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();

  function toggleWindow(windowType) {
    const window = windows[windowType];
    if (!window) {
      console.error(`Window not for found for type: ${windowType}`)
    }

    if (window.isOpen) {
      closeWindow(windowType)
    } else {
      openWindow(windowType)
    }
  }

  return (
    <nav>

      <div>
        <img src="/images/logo.svg" alt="Logo" className='size-5' />
        <p className="font-bold">Ahsan's Portfolio</p>
        <ul>
          {
            navLinks.map(({ id, name, type }) => (
              <li key={id} onClick={() => toggleWindow(type)}>
                <p>{name}</p>
              </li>
            ))
          }
        </ul>
      </div>

      <div>
        <ul>
          {
            navIcons.map(({ id, img }) => (
              <li key={id}>
                <img src={img} alt={`icon-${id}`} className='icon-hover' />
              </li>
            ))
          }
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar