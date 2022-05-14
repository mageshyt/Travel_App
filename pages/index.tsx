import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import MapBox from '../components/MapBox'
import SideBar from '../components/sideBar'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full  overflow-hidden ">
      <Head>
        <title>Travel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* side bar and feed */}
      <div className="flex h-full ">
        <SideBar />
        <Feed />
      </div>
    </div>
  )
}

export default Home
