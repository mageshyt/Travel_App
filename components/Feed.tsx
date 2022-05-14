import React from 'react'
import TravelMap from '../assets/TravelMap'
import Explore from './Expore/Explore'
import Header from './Header'
import FriendsCard from './UpComing/FriendsCard'
import UpcomingTrip from './UpComing/UpcomingTrip'

const styles = {
  wrapper: `w-full h-full bg-[#010101]`,
}

const Feed = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className=" flex h-full w-full flex-col items-center overflow-hidden  overflow-y-scroll pb-10 lg:h-[600px]    xl:flex-row">
        <UpcomingTrip />
        <TravelMap />
        <FriendsCard />
      </div>

      {/* Explore Trips */}
      <div>
        <Explore />
      </div>
    </div>
  )
}

export default Feed
