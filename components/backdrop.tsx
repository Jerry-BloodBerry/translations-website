import React from 'react'

const Backdrop = ({ onClick }: { onClick: () => any }) => {
  return (
    <div
      className="fixed w-full h-full bg-black bg-opacity-50 z-10 top-0 right-0"
      onClick={onClick}
    ></div>
  )
}

export default Backdrop
