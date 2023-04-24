import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import WebsiteLayout from '../layouts/WebsiteLayout';

const Home: NextPage = () => {
  return (
   <div>
    <WebsiteLayout />
    {/* <DashBoardLayout /> */}
    </div>
  )
}

export default Home
