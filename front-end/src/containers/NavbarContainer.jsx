import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { scrollToPosition } from '../lib/jello'
import {  NavbarLoggedOut } from '../components/navbar/NavbarRenderables'
import {  useDispatch } from 'react-redux'

export const  NavbarContainer = () => {
  const dispatch = useDispatch()

  const onClickNavbarMark = () => {
    // const { dispatch } = this.props
    // dispatch(push('/'))
    scrollToPosition(0, 0)
  }
  
    return (
          <NavbarLoggedOut
        onClickNavbarMark={onClickNavbarMark}
      />
    )
} 