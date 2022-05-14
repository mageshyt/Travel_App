import React from 'react'
import { GoSearch } from 'react-icons/go'
import { VscBellDot } from 'react-icons/vsc'

const styles = {
  searchBar:
    'flex max-w-[80%] lg:max-w-[900px]  w-[900px] rounded-2xl bg-[#121418] p-3',
  wrapper: '',
  notification:
    'avatar_lg lg:flex lg:items-center lg:justify-center hidden cursor-pointer bg-gray-900  hover:scale-125 hover:bg-gray-800',
}
const Header = () => {
  return (
    <div className="m-10 flex items-center  justify-between space-x-3 ">
      {/* search bar  */}
      <div className={styles.searchBar}>
        <div className="flex w-full items-center ">
          <GoSearch className="text-3xl text-white" />
          <input
            type="text"
            placeholder="Search"
            className=" h-full w-full rounded-2xl bg-transparent p-3 text-white outline-none"
          />
        </div>

        {/* 2 buttons */}
        <div className="flex space-x-3">
          <button className="rounded-2xl bg-[#2150E8] px-4 py-2 text-white">
            Foreign
          </button>
          <button className="rounded-2xl bg-gray-600 px-4 py-2 text-white">
            Inside
          </button>
        </div>
      </div>

      {/* notification and user logo */}
      <div className="flex space-x-4">
        {/* bell  */}
        <div className={styles.notification}>
          <VscBellDot className="text-3xl text-white" />
        </div>
        {/* user */}
        <div className=" ">
          <img
            src="https://avatars.githubusercontent.com/u/70838644?v=4"
            alt="profile "
            className="avatar_lg "
          />
        </div>
      </div>
    </div>
  )
}

export default Header
