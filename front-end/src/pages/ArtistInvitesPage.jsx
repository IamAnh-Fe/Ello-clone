import React from 'react'
import { HeroHeader } from '~/components/heros/HeroRenderables/HeroRenderables'
import MainView from '../components/views/MainView/MainView'
export const ArtistInvitesPage = (props) => {
   const { dpi, pageHeader, user } = props
    let hero
  if (pageHeader) {
    const header = pageHeader.get('header', '')
    const subheader = pageHeader.get('subheader', '')
    const avatarSources = user.get('avatar', null)
    const username = user.get('username', null)
    const sources = pageHeader.get('image', null)
    hero = (<HeroHeader
      dpi={dpi}
      headerText={header}
      subHeaderText={subheader}
      sources={sources}
      avatarSources={avatarSources}
      username={username}
    />)
  }
    return (
      <MainView className='ArtistInvites'>
        {hero}
      </MainView>
    )
  
}
