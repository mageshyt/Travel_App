import React from 'react'
import { CardProps } from '../../typings'
import { Image } from 'primereact/image'
import { AiFillStar, AiFillCompass } from 'react-icons/ai'
const styles = {
  wrapper: `h-[450px] flex-col flex p-5 items-center justify-around rounded-xl w-[250px] bg-[#121418]`,
  reviewText: 'text-xl text-gray-300',
  reviewContainer: 'mt-5 flex w-full items-center justify-between',
  viewOrderBtn:
    'w-full bg-blue-600 text-white text-center py-2 cursor-pointer animate hover:bg-blue-500 rounded-xl',
}

interface Props {
  data: CardProps
}
const ExploreCard = ({ data }: Props) => {
  const { name, imageUrl, description, price, star, review } = data
  console.log(price)
  return (
    <div className={styles.wrapper}>
      {/* image */}
      <div>
        <img
          src={imageUrl}
          className="h-[180px]  w-[200px] rounded-xl"
          alt="Hotel image"
        />
      </div>
      {/* Name and price */}
      <div className={styles.reviewContainer}>
        <span className={styles.reviewText}>{name}</span>
        <span className={styles.reviewText}>{price}</span>
      </div>
      {/* Description */}
      <div>
        <span className="text-xs text-gray-600">
          {description.slice(0, 70)}...
        </span>
      </div>
      {/* Star and review */}
      <Reviews star={star} review={review} />

      {/* View Order btn */}
      <div className={styles.viewOrderBtn}>View Order</div>
    </div>
  )
}

export default ExploreCard

const Reviews = ({ star, review }: { star: number; review: number }) => {
  return (
    <div className="mt-5 flex w-full items-center justify-between">
      {/* Stars */}
      <div className="flex items-center space-x-2">
        <AiFillStar className="text-yellow-500" size={20} />
        <span className="text-gray-500"> {star}/5</span>
      </div>
      {/* Review */}
      <div className="flex items-center space-x-2">
        <AiFillCompass className="text-purple-500" size={18} />
        <span className="text-gray-500">{review} reviews</span>
      </div>
    </div>
  )
}
