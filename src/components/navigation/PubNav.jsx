import React from 'react'
import MenuItems from './MenuItems'
import { navitems } from './navitems'

const PubNav = () => {
  return (
      <MenuItems items={navitems.pubNavItems} />
  )
}

export default PubNav
