import React from 'react'
import { GeneratorFakeUser } from '../../pages/api/GenerateFakeUser'

const styles = {
  wrapper: `h-full overflow-hidden max-w-[450px] w-[500px]  md:w-[350px] p-10`,
  title: 'text-4xl text-gray-300',
}

const FriendsCard = () => {
  const fakeUsers = GeneratorFakeUser()
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Friends</span>
      <div className="h-[460px] rounded-xl bg-[#121418]">
        <div className="w-full121418 mt-4 h-full  overflow-y-scroll ">
          {fakeUsers.map(
            (user: { name: string; image: string }, index: number) => {
              return (
                <div key={index} className="flex items-center  space-x-4 p-4  ">
                  <img src={user?.image} alt="" className="avatar_lg" />
                  <span className="text-white">{user?.name}</span>
                </div>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

export default FriendsCard
