import React from 'react'
import { GeneratorFakeUser } from '../../pages/api/GenerateFakeUser'

const styles = {
  wrapper: `h-full overflow-hidden max-w-[350px]  w-[350px] p-10`,
  title: 'text-4xl text-gray-300',
}

const FriendsCard = () => {
  const fakeUsers = GeneratorFakeUser()
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Friends</span>
      <div className="mt-4 h-[500px] w-full121418  overflow-y-scroll rounded-xl bg-[#121418]">
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
  )
}

export default FriendsCard
