import React, { Children } from 'react'

function Flex({className,children}) {
  //                 npm run dev

  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}

export default Flex

  //                 npm run dev