import React from 'react'
import { Info } from '../../Data/ExploreData'
import Explore from './Explore'

export const ExploreOne = () => {
  return (
    <Explore first={Info.first.flash} second={Info.first.boxes}/>
  )
}

export const ExploreTwo = () => {
  return (
    <Explore first={Info.second.flash} second={Info.second.boxes}/>
  )
}

export const ExploreThree = () => {
  return (
    <Explore first={Info.third.flash} second={Info.third.boxes}/>
  )
}
