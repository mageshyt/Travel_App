import React from 'react'
import MapBox from '../components/MapBox'

import { Rating } from 'primereact/rating'
import { Toronto } from './Trip.asset'
import { AiFillStar } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'

const styles = {
  wrapper: 'p-10   w-full  ',
  title: 'text-4xl text-gray-300',
}

const TravelMap = () => {
  const { description } = Toronto
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Travel Map</span>
      <div className="center mt-4 h-full w-[400px] flex-col  rounded-xl bg-[#121418] p-10">
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
    <div className="flex space-x-2 p-4">
      {/* des */}
      <img src="/hotel-1.webp" className=" hotel_img rounded-xl" alt="" />
      <div className="select-none text-gray-500">{description}</div>
    </div>
  )
}