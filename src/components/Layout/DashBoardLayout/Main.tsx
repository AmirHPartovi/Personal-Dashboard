import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import {Outlet} from 'react-router-dom'
type Props = {}

const Main = (props: Props) => {
  return (
    <div>
        <Header/>
        <SideBar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Main