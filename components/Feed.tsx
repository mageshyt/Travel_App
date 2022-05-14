import React from 'react'
import TravelMap from '../assets/TravelMap'
import Explore from './Expore/Explore'
import Header from './Header'
import FriendsCard from './UpComing/FriendsCard'
import UpcomingTrip from './UpComing/UpcomingTrip'

const styles = {
  wrapper: `w-full h-full flex flex-col overflow-y-scroll bg-[#010101]`,
}

const Feed = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className=" flex   w-full flex-col items-center pb-10 lg:h-[600px]    xl:flex-row">
        <UpcomingTrip />
        <TravelMap />
        <FriendsCard />
      </div>

      {/* Explore Trips */}
      <div className=" p-10">
        <Explore />
      </div>
    </div>
  )
}

export default Feed
