import React from 'react'
import { AppleStore, GooglePlayStore } from '~/components/assets/Sqrites/Sqrites'
import { Link } from 'react-router-dom'

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
    <Link
      className={`HeroPromotionCredits ${collapsed ? creditsStyle : creditsStyleExpanded}`}
      onClick={track}
      to={`/${username}`}
    >
      {!collapsed && label && <span className={creditsByStyle}>{label}</span>}
      {!collapsed && <span className={`${creditsAuthorStyle}${label ? ' with-label' : ''}`}>@{username}</span>}
      <Avatar className='inHeroPromotionCredits' sources={sources} username={username} />
    </Link>
  )
}
