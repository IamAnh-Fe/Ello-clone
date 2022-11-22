import React from 'react'

export const ImageAsset = (props) => {
  const { onLoadSuccess, onLoadFailure, onScreenDimensions } = props

  const onLoadSuccessImage = () => {
    getDimensionsOnScreen()
    if (typeof onLoadSuccess === 'function') {
      onLoadSuccess(img)
    }
    disposeLoader()
    }
    
  const onLoadFailureImage = () => {
    disposeLoader()
    if (typeof onLoadFailure === 'function') {
      onLoadFailure()
    }
    }
    
  const getDimensionsOnScreen = () => {
    const { isPostBody } = props

    if (isPostBody) {
      const onScreenDimensionsImage = {
        width: imgOnScreen.clientWidth,
        height: imgOnScreen.clientHeight
      }
      onScreenDimensions(onScreenDimensionsImage)
    }
  }

  const createLoader = () => {
    disposeLoader()
    const { src, srcSet } = props
    const hasSource = !!((src && src.length) || (srcSet && srcSet.length))
    if (!hasSource) {
      return
    }
    img = new Image()
    img.onload = onLoadSuccessImage
    img.onerror = onLoadFailureImage
    if (srcSet) {
      img.srcset = srcSet
    }
    img.src = src
  }
  useEffect(() => {
    createLoader()
  }, [])
  useEffect((prevProps) => {
    if (!img && prevProps.src !== props.src) {
      createLoader()
    }
    getDimensionsOnScreen()
  })
  useEffect(() => {
    return () => {
      disposeLoader()
    }
  }, [])
  const disposeLoader = () => {
    if (!img) {
      return
    }
    img.onload = null
    img.onerror = null
    img = null
  }

  const elementProps = { ...props }
  delete elementProps.onLoadFailure
  delete elementProps.onLoadSuccess
  delete elementProps.isPostBody
  delete elementProps.onScreenDimensions
  if (elementProps.isBackgroundImage) {
    const style = elementProps.src ? { backgroundImage: `url(${elementProps.src})` } : null
    delete elementProps.src
    delete elementProps.isBackgroundImage
    return <figure {...elementProps} className='ImageAsset' style={style} />
  }
  return (
    <img
      alt=''
      {...elementProps}
      ref={(imgOnScreen) => {
        imgOnScreen = imgOnScreen
      }}
    />
  )
}
