import React from 'react'
import HomePage from '../pages/HomePage'

const ReactRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  )
}

export default ReactRouter