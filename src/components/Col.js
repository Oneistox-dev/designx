import React from 'react'

export const Col = ({ className, children, col }) => {
  return (
    <div className={`${className || ''} ${'col-span-' + col || 1}`}>
      {children}
    </div>
  )
}
