import { Galleria } from 'primereact/galleria'
import React from 'react'
import { Toronto, dateTemplate } from '../../assets/Trip.asset'
import { Calendar } from 'primereact/calendar'
import { FiCalendar } from 'react-icons/fi'
import { BiBed } from 'react-icons/bi'
import { MdFlight } from 'react-icons/md'
const styles = {
  wrapper: `w-full `,
  title: `text-4xl text-gray-300`,
  TorontoImage: 'h-[200px]  w-[250px] rounded-lg shadow-lg',
  btn: 'animate flex cursor-pointer items-center space-x-2 rounded-3xl bg-[#262629] p-2 text-white  hover:scale-110',
  bookText: ' font-semibold text-[#2150E8]',
  CardContainer:
    'mt-4 flex max-w-[800px] lg:w-[800px] lg:flex-row items-center space-x-3 rounded-xl bg-[#121418] p-10 flex-col',
}
const UpcomingTrip = () => {
  const { name, imageUrl, description } = Toronto
  // ! image itemTemplate
  const itemTemplate = (item: any) => {
    return (
      <div className="p-2">
        <img src={item.itemImageSrc} alt="" />
      </div>
    )
  }
  //! thumbnailTemplate
  const thumbnailTemplate = (item: any) => {
    return <img src={item.thumbnailImageSrc} alt="" />
  }
  return (
    <div className="  p-10">
      <div className={styles.title}>Upcoming Trip</div>
      {/* Toronto Tower */}
      <div className={styles.CardContainer}>
        {/* left side image */}
        <div>
          <Galleria
            value={imageUrl}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            className="w-[400px]"
          ></Galleria>
        </div>
        {/* right side text */}
        <HotelDetails name={name} description={description} />
      </div>
    </div>
  )
}

export default UpcomingTrip

const BookButton = () => {
  return (
    <div className="flex space-x-2 ">
      {/* calendar */}
      <div className={styles.btn}>
        <FiCalendar className="text-2xl text-gray-300" />
        <span className="text-gray-500">13 may - 27 may</span>
      </div>

      {/* room */}
      <div className={styles.btn}>
        <BiBed className="text-2xl text-gray-300" />
        <span className="text-gray-500">sun Hotel</span>
      </div>
    </div>
  )
}

//  <Calendar
//             id="icon"
//             showIcon
//             hideOnDateTimeSelect={true}
//             dateFormat="dd/mm/yy"
//             className="w-[200px]"
//             value={new Date()}
//             touchUI
//             inputStyle={{
//               border: 'none',
//               borderRadius: '0px',
//               padding: '0px',
//               backgroundColor: 'transparent',
//               color: '#fff',
//             }}
//           ></Calendar>

function HotelDetails({ name, description }: any) {
  return (
    <div className="flex  flex-col items-center space-y-6 ">
      <p className="mb-3 text-lg font-bold text-gray-300">{name}</p>
      {/* bts */}
      <BookButton />
      {/* description */}
      <div className="text-gray-300">{description}</div>
      {/* flight  */}
      <div className=" flex w-[150px] items-center justify-around">
        <span className={styles.bookText}>Toranto</span>
        <div className="cursor-pointer rounded-full bg-gray-800  p-1">
          <MdFlight className="rotate-45  text-3xl text-gray-300" />
        </div>
        <span className={styles.bookText}>Fly</span>
      </div>
      {/* Show more btn */}
      <div className="w-full cursor-pointer rounded-xl bg-blue-700 p-3 text-center hover:bg-blue-600">
        Show More
      </div>
    </div>
  )
}
