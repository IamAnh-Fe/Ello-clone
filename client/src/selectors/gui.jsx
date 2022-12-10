import { createSelector } from '@reduxjs/toolkit'

// state.gui.xxx
export const selectInnerWidth = (state) => state.gui.get('innerWidth')

export const selectHeroDPI = createSelector([selectInnerWidth], (innerWidth) => {
  if (innerWidth <= 1200) {
    return 'hdpi'
  }
  return 'xhdpi'
})
