import React from 'react'
import TravelMap from '../assets/TravelMap'
import Header from './Header'
import UpcomingTrip from './UpComing/UpcomingTrip'

const styles = {
  wrapper: `w-full h-full bg-[#010101]`,
}

const Feed = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className="10 flex h-[600px]  w-full">
        <UpcomingTrip />
        <TravelMap />
      </div>
    </div>
  )
}

export default Feed
