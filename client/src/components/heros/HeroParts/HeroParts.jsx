import React from 'react'
import { AppleStore, GooglePlayStore } from '../../assets/Sqrites/Sqrites'
import { Link } from 'react-router-dom'
import { Avatar } from '../../assets/Avatar/Avatar'
//--------------------------------------
export const HeroAppStores = () => {
  return (
    <div>
      <AppleStore />
      <GooglePlayStore />
    </div>
  )
}
// -------------------------------------

export const HeroPromotionCredits = ({ collapsed, label, sources, username, trackingLabel }) => {
  return (
    <div className='HeroPromotionCredits'>
      <Link
        className={` ${collapsed ? 'HeroPromotionCredits-credit' : 'HeroPromotionCredits-creditExpanded'}`}
        to={`/${username}`}
      >
        {!collapsed && label && <span className='HeroPromotionCredits-creditBy'>{label}</span>}
        {!collapsed && (
          <span className={`HeroPromotionCredits-creditsAuthor ${label ? ' with-label' : ''}`}>@{username}</span>
        )}
        <Avatar className='inHeroPromotionCredits' sources={sources} username={username} />
      </Link>
    </div>
  )
}
