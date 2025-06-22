import React, { Children } from 'react'
import Sidebar from './Sidebar'

function Wrapper({children}) {
  return (
    <>
        <Sidebar/>
         {children}
    </>
  )
}

export default Wrapper
