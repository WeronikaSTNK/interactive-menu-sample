import React from 'react'
import '../../index.css'
export const Header = ({logo}) => {
  return (
    <>
    <section id="header">
      <hr />
      <img src={logo} alt='logo' />
    </section>
    </>
  )
}

export default Header
