import React from 'react'
import { HeroPromotionCredits } from '../HeroParts/HeroParts'
export const HeroHeader = ({ dpi, headerText, subHeaderText, sources, avatarSources, username }) => {
  return (
    <div className='heroheader '>
      <div className='heroheader-content'>
        <div className='heroheader-image'></div>
        <div className='heroheader-caption'>
          <h1 className='heroheader-heading'>{headerText}</h1>
          <p className='heroheader-subheading'>dangerouslySetInnerHTML={{ __html: subHeaderText }}</p>
        </div>
        <HeroPromotionCredits label='Posted by' sources={avatarSources} username={username} />
      </div>
    </div>
  )
}
