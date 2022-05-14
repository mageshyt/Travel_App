import React from 'react'
import { SidebarIcons, TravelLogo } from '../assets/asset.data'
import { FaMoon } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
const styles = {
  wrapper: `w-[150px] hidden lg:flex pt-4 flex-col  gap-y-4   items-center h-full bg-[#121418]`,
  MenuText: `text-gray-500 text-lg`,
  icon: 'text-3xl text-gray-600 hover:scale-125 transform transition-all duration-100 ease-in cursor-pointer',
  iconActive: 'icon text-[#2150E8]  text-white',
  iconMoon:
    'text-2xl text-gray-200 hover:scale-125 transform transition-all duration-100 ease-in cursor-pointer',
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

      <MenuIcons setActive={setActive} ActiveIcon={ActiveIcon} />

      {/* Bottom session setting and moon */}
      <div className=" center mt-auto mb-10 flex-col space-y-4">
        <FaMoon className={styles.iconMoon} />
        {/* setting  */}
        <div className="center h-10 w-10 rounded-full border border-gray-700 bg-[#020304] p-2">
          <AiFillSetting className={styles.icon} />
        </div>
      </div>
    </div>
  )
}

export default SideBar

const MenuIcons = ({ setActive, ActiveIcon }: any) => {
  return (
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
  )
}
