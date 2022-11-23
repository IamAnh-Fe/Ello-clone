import Immutable from 'immutable'
import get from 'lodash/get'

import { createSelector } from '@reduxjs/toolkit'
import { selectInvitationUserId } from './invitations'
import { selectParamsUsername } from './params'
import { USERS } from '../constants/mapping_types'

export const selectPropsUserId = (state, props) => get(props, 'userId') || get(props, 'user', Immutable.Map()).get('id')

export const selectUsers = (state) => state.json.get(USERS, Immutable.Map())
// Memoized selectors

// Requires `userId`, `user` or `params.username` to be found in props
// export const selectUser = createSelector(
//   [selectPropsUserId, selectInvitationUserId, selectParamsUsername, selectUsers],
//   (id, invitationUserId, username, users) => {
//     const userId = id || invitationUserId
//     if (userId) {
//       return users.get(userId, Immutable.Map())
//     } else if (username) {
//       return users.find((user) => user.get('username') === username) || Immutable.Map()
//     }
//     return Immutable.Map()
//   }
// )

export const selectUser = createSelector(
  [selectPropsUserId, selectInvitationUserId, selectParamsUsername, selectUsers],
  (id, invitationUserId, username, users) => {
    const userId = id || invitationUserId
    if (userId) {
      return users.get(userId, Immutable.Map())
    } else if (username) {
      return users.find((user) => user.get('username') === username) || Immutable.Map()
    }
    return Immutable.Map()
  }
)
