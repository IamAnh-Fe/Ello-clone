import React, { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const STATUS = {
  PENDING: 'isPending',
  REQUEST: 'isRequesting',
  SUCCESS: null,
  FAILURE: 'isFailing'
}

export const getSource = (props) => {
  const { dpi, sources, useGif } = props

  if (!sources) {
    return ''
  } else if (sources.getIn(['tmp', 'url'])) {
    return sources.getIn(['tmp', 'url'])
  } else if (useGif && isGif(sources.getIn(['original', 'url'])) && sources.hasIn(['video', 'url'])) {
    return sources.getIn(['video', 'url'])
  } else if (useGif && isGif(sources.getIn(['original', 'url']))) {
    return sources.getIn(['original', 'url'])
  }
  return sources.getIn([dpi, 'url'], null)
}

export const BackgroundImage = (props) => {
  const [status, setStatus] = useState(STATUS)

  const { className, onClick, to } = props
  const classList = classNames('BackgroundImage', status, className)
  const src = getSource(props)
  const isVideo = !!src && src.substr(-3) === 'mp4'
  const onLoadSuccess = () => {
    setStatus(status.SUCCESS)
  }
  const onLoadFailure = () => {
    setStatus(status.FAILURE)
  }
  const imageAssetProps = {
    isBackgroundImage: true,
    onLoadFailure: onLoadFailure,
    onLoadSuccess: onLoadSuccess,
    src
  }
  const videoAssetProps = {
    src
  }
  if (isVideo) {
    return (
      <Link className={classNames(classList, 'isLink')} onClick={onClick} to={to}>
        <VideoAsset {...videoAssetProps} className={editorialVideoStyle} />
      </Link>
    )
  }
  return to ? (
    <Link className={classNames(classList, 'isLink')} onClick={onClick} to={to}>
      <ImageAsset {...imageAssetProps} />
    </Link>
  ) : (
    <div className={classList} onClick={onClick}>
      <ImageAsset {...imageAssetProps} />
    </div>
  )
}
