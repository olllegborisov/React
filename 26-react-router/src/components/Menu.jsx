import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: 'lightyellow', textDecoration: 'none' } : {}
        }
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
        to="courses"
      >
        Courses
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
        to="contacts"
      >
        Contacts
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
        to="info"
      >
        Info
      </NavLink>
    </nav>
  )
}

export default Menu
