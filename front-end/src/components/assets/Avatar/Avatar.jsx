import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { getSource } from '../BackgroundImage/BackgroundImage'
import { ImageAsset } from '../ImageAsset/ImageAsset'
import { VideoAsset } from '../VideoAsset/VideoAsset'
const STATUS = {
  PENDING: 'isPending',
  REQUEST: 'isRequesting',
  SUCCESS: null,
  FAILURE: 'isFailing',
}
export const Avatar = (props) => {
  const { alt, className, onClick, priority, to, userId, username, size } = props
  const [status, setStatus] = useState(STATUS)
  useEffect(() => {
      setStatus( getSource({ ...props, dpi: size }) ? status.REQUEST : status.PENDING)
  })
  const thisSource = getSource({ ...props, dpi: size })
  useEffect(() => {
    setStatus(thisSource ? status.REQUEST : status.PENDING)
  }, [thisSource]);
 const onLoadSuccess = () => {
    setStatus(status.SUCCESS)
  }

  const onLoadFailure = () => {
    setStatus(status.FAILURE)
  }
    const wrapperProps = {
      className: classNames(`Avatar Avatar-base`, className, status),
      'data-priority': priority || 'inactive',
      'data-userid': userId,
      'data-username': username,
      draggable: (username && username.length > 1) || (priority && priority.length),
    }
    const src = getSource({ ...props, dpi: size })
    const isVideo = !!src && src.substr(-3) === 'mp4'
    const imageProps = {
      alt: alt || username,
      className:'Avatar-image',
      src,
      onLoadFailure: this.onLoadFailure,
      onLoadSuccess: this.onLoadSuccess,
    }
    const videoProps = {
      src,
      className:'Avatar-video',
    }
   if (isVideo) {
      if (to) {
        return (
          <Link {...wrapperProps} to={to} >
            <VideoAsset {...videoProps} />
          </Link>
        )
      } else if (onClick) {
        return (
          <button {...wrapperProps} onClick={onClick} >
            <VideoAsset {...videoProps} />
          </button>
        )
      }
      return (
        <span {...wrapperProps} >
          <VideoAsset {...videoProps} />
        </span>
      )
    }
   if (to) {
      return (
        <Link {...wrapperProps} to={to} >
          <ImageAsset {...imageProps} />
        </Link>
      )
    } else if (onClick) {
      return (
        <button {...wrapperProps} onClick={onClick} >
          <ImageAsset {...imageProps} />
        </button>
      )
    }
    return (
      <span {...wrapperProps} >
        <ImageAsset {...imageProps} />
      </span>
    )
}

