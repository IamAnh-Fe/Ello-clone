import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  ArrowIcon,
  ElloLogoType,
  PencilIcon,
  XIconLG,
} from '../assets/Icons'

export const NavbarMark = ({ onClick }) => (
  <Link
    className=''
    draggable
    onClick={onClick}
    to="/"
  >
    <ElloLogoType />
  </Link>
)

NavbarMark.propTypes = {
  onClick: PropTypes.func.isRequired,
}
//----------------------

export const NavbarLink = ({
  className = '',
  icon,
  label,
  // onClick,
  // onDragLeave,
  // onDragOver,
  // onDrop,
  // pathname,
  to,
}) => {
  // const klassNames = classNames(
  //   'NavbarLink',
  //   className,
  //   `${linkStyle}`,
  //   {
  //     isActive: highlightingRules[to] ? pathname.match(highlightingRules[to]) : pathname === to,
  //   },
  // )
  return (
    <Link
      className={className}
      // onClick={onClick}
      // onDragLeave={onDragLeave}
      // onDragOver={onDragOver}
      // onDrop={onDrop}
      to={to}
    >
      {icon || null}
      <span className=''>{label}</span>
    </Link>
  )
}

// NavbarLink.propTypes = {
//   className: PropTypes.string.isRequired,
//   icon: PropTypes.element,
//   label: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
//   onDragLeave: PropTypes.func,
//   onDragOver: PropTypes.func,
//   onDrop: PropTypes.func,
//   pathname: PropTypes.string.isRequired,
//   to: PropTypes.string.isRequired,
// }
// NavbarLink.defaultProps = {
//   icon: null,
//   onClick: null,
//   onDragLeave: null,
//   onDragOver: null,
//   onDrop: null,
// }
