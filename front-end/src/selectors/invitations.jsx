import Immutable from 'immutable'
import { createSelector } from '@reduxjs/toolkit'
import get from 'lodash/get'
import { INVITATIONS } from '../constants/mapping_types'

export const selectPropsInvitationId = (state, props) =>
  get(props, 'invitationId') || get(props, 'invitation', Immutable.Map()).get('id')

export const selectInvitations = (state) => state.json.get(INVITATIONS, Immutable.Map())
// Memoized selectors

// Requires `invitationId`, or `invitation` to be found in props
export const selectInvitation = createSelector([selectPropsInvitationId, selectInvitations], (id, invitations) =>
  invitations.get(id, Immutable.Map())
)

export const selectInvitationUserId = createSelector([selectInvitation], (invitation) =>
  invitation.getIn(['links', 'acceptedBy', 'id'])
)
