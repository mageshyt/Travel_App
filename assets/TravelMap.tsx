import React from 'react'
import MapBox from '../components/MapBox'
import { Toronto } from './Trip.asset'

const styles = {
  wrapper: 'p-10 h-full     ',
  title: 'text-4xl text-gray-300',
}

const TravelMap = () => {
  const { description } = Toronto
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Travel Map</span>
      <div className="center mt-4 h-full w-[400px] max-w-[400px]  flex-col overflow-hidden  rounded-xl bg-[#121418] ">
        <MapBox />
        <SmallCard description={description} />
      </div>
      {/* small card */}
    </div>
  )
}

export default TravelMap

const SmallCard = ({ description }: any) => {
  return (
    <div className="flex w-full space-x-2 p-4">
      {/* des */}
      <img src="/hotel-1.webp" className=" hotel_img rounded-xl" alt="" />
      <div className="select-none text-gray-500">{description}</div>
    </div>
  )
}
