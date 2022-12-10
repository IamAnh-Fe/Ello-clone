import React from 'react'
import classNames from 'classnames'

export default function MainView({ children, className }) {
  return (
    <main className={classNames(className, 'MainView')} role='main'>
      {children}
    </main>
  )
}
