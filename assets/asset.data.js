export const TravelLogo =
  'https://www.pngitem.com/pimgs/m/344-3445920_travel-logo-png-hd-transparent-png.png'
import { BsPuzzleFill } from 'react-icons/bs'
import { FiHome } from 'react-icons/fi'
import { AiFillHome } from 'react-icons/ai'
import { HiDocumentText, HiDocument, HiPuzzle } from 'react-icons/hi'
import { IoWallet } from 'react-icons/io'
import { BiWallet, BiCalendar } from 'react-icons/bi'
import { FaCalendarAlt, FaWallet } from 'react-icons/fa'
//! sidebar Icons

export const SidebarIcons = [
  {
    name: 'Home',
    Icon: FiHome,
    Active: AiFillHome,
  },
  {
    name: 'Documents',
    Icon: HiDocumentText,
    Active: HiDocument,
  },
  {
    name: 'Wallet',
    Icon: BiWallet,
    Active: FaWallet,
  },
  {
    name: 'Puzzle',
    Icon: BsPuzzleFill,
    Active: HiPuzzle,
  },
  {
    name: 'Calendar',
    Icon: BiCalendar,
    Active: FaCalendarAlt,
  },
]
