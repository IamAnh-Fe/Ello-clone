import React, {useEffect} from 'react'

export const VideoAsset = (props) => {
  const { onScreenDimensions } = props

  useEffect(() => {
    getDimensionsOnScreen()
  })
  const getDimensionsOnScreen = () => {
    const { isPostBody, isPostDetail, isGridMode } = props

    if (isPostBody && (isPostDetail || !isGridMode)) {
      const onScreenDimensionsImage = {
        width: this.videoOnScreen.clientWidth,
        height: this.videoOnScreen.clientHeight
      }
      onScreenDimensions(onScreenDimensionsImage)
    }
  }

  const createLoader = () => {
    disposeLoader()
    const { src } = this.props
    const hasSource = !!(src && src.length)
    if (!hasSource) {
      return
    }
    const video = new Image()
    video.onload = this.onLoadSuccess
    video.onerror = this.onLoadFailure
    video.src = src
  }

  const disposeLoader = () => {
    const video = new Image()

    if (!video) {
      return
    }
    video.onload = null
    video.onerror = null
    video = null
  }
  const elementProps = { ...this.props }
  delete elementProps.onLoadFailure
  delete elementProps.onLoadSuccess
  delete elementProps.onScreenDimensions
  return (
    <video
      id={this.props.id}
      autoPlay
      loop
      muted
      playsInline
      width={elementProps.width}
      height={elementProps.height}
      style={elementProps.style}
      className={elementProps.className}
      ref={(videoOnScreen) => {
        videoOnScreen = videoOnScreen
      }}
    >
      <track kind='captions' />
      <source src={elementProps.src} className='backgroundStyle' />
    </video>
  )
}
