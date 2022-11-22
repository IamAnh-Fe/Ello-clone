import React from 'react'

export const AppleStore = ({ to }) => {
  return (
    <a className='sprite' href={to} rel='noopener noreferrer' target='_blank'>
      <span className='invisible'>Apple Store</span>
    </a>
  )
}
// -------------------------------------

export const GooglePlayStore = () => {
  return (
    <a className='sprite googleStoreStyle' href={to} rel='noopener noreferrer' target='_blank'>
      <span className='invisible'>Apple Store</span>
    </a>
  )
}
