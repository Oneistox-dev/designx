import React from 'react'

export const Grid = ({ className, children }) => {
  return (
    <div className={`grid grid-cols-12 ${className || ''} gap-4 px-4`}>
      {children}
    </div>
  )
}
