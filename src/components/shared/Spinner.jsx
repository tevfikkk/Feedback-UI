import React from 'react'
import spinner from '../assets/18.gif'

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  )
}

export default Spinner
