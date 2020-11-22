import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export const Portal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const el = useRef(document.createElement('div'))
  useEffect(() => {
    const element = el.current
    const modalRoot = document.getElementById('root') as HTMLElement
    modalRoot!.appendChild(el.current)
    return () => void modalRoot!.removeChild(element)
  }, [])

  return createPortal(children, el.current)
}
