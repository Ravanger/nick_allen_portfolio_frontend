import './src/static/style/reset.css'
import './src/static/fonts/fonts.css'
import './src/static/style/global.css'
import React from 'react'
import Layout from '@components/Layout'

const transitionDelay = 500

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location && location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}

export const onRouteUpdate = () => {
  window.locations = window.locations || [document.referrer]
  window.locations.push(window.location.pathname)
  window.previousPath = window.locations[window.locations.length - 1]
}
