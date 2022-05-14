import React from 'react'
import { SidebarIcons, TravelLogo } from '../assets/asset.data'

import { Galleria } from 'primereact/galleria'

const styles = {
  wrapper: `w-[150px] hidden lg:flex pt-4 flex-col  gap-y-4  items-center h-full bg-[#121418]`,
  MenuText: `text-gray-500 text-lg`,
  icon: 'text-3xl text-gray-600 hover:scale-125 transform transition-all duration-100 ease-in cursor-pointer',
  iconActive: 'icon text-[#2150E8]  text-white',
}

const SideBar = () => {
  //! to tack the Active movie
  const [ActiveIcon, setActive] = React.useState('Home')
  return (
    <div className={styles.wrapper}>
      {/* Logo */}
      <div>
        <img src={TravelLogo} className="avatar_lg" alt="" />
      </div>

      <div className="center w-full flex-col ">
        <span className={styles.MenuText}>Menu</span>
        {/* Icons */}
        {SidebarIcons.map((icon, index) => {
          const { Icon, Active, name } = icon
          return (
            <div
              className="center m-4  w-full"
              key={index}
              onClick={() => {
                setActive(name)
              }}
            >
              {ActiveIcon === name ? (
                <div className="center relative w-full     ">
                  <div
                    className={
                      'absolute left-1 h-8 w-1 scale-105 transform rounded-xl   bg-[#2150E8] transition-all duration-[400]  '
                    }
                  />
                  <Active className={`${styles.iconActive} ${styles.icon}`} />
                </div>
              ) : (
                <Icon className={`${styles.icon}`} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const SlideBarIcon = ({ name, Icon, Active, index }: any) => {}
export default SideBar
