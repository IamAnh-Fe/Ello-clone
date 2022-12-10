import React from 'react'
import Immutable from 'immutable'
import { selectQueryPreview } from '../selectors/routing'
import { selectRandomPageHeader } from '../selectors/page_header'
import { selectUser } from '../selectors/user'
import { selectHeroDPI } from '../selectors/gui'
import { HeroHeader } from '../components/heros/HeroRenderables/HeroRenderables'
import { useSelector } from 'react-redux'
import MainView from '../components/views/MainView/MainView'
export const ArtistInvitesPage = () => {
  const pageHeader = useSelector(selectRandomPageHeader)
  const user = pageHeader ? useSelector(selectUser({ userId: pageHeader.get('userId') })) : null
  const dpi = useSelector(selectHeroDPI)
  const isPreview = useSelector(selectQueryPreview() === 'true')
  let hero
  if (pageHeader) {
    const header = pageHeader.get('header', '')
    const subheader = pageHeader.get('subheader', '')
    const avatarSources = user.get('avatar', null)
    const username = user.get('username', null)
    const sources = pageHeader.get('image', null)
    hero = (
      <HeroHeader
        dpi={dpi}
        headerText={header}
        subHeaderText={subheader}
        sources={sources}
        avatarSources={avatarSources}
        username={username}
      />
    )
  }
  return <MainView className='ArtistInvites'>{hero}</MainView>
}
