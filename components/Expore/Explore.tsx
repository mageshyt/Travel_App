import React from 'react'
import { ExploreData } from '../../assets/Trip.asset'
import { CardProps } from '../../typings'
import ExploreCard from './ExploreCard'

const styles = {
  wrapper: `h-full overflow-hidden max-w-[350px]  w-[350px] p-10`,
  title: 'text-4xl text-gray-300',
}

const Explore = () => {
  return (
    <div>
      <span className={styles.title}>Explore Trips</span>

      {/* Cards */}
      <div className="mt-4 flex gap-x-8">
        {ExploreData.map((data: CardProps, index: number) => {
          return <ExploreCard key={index} data={data} />
        })}
      </div>
    </div>
  )
}

export default Explore
