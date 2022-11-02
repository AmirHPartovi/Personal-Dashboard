import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import {Outlet} from 'react-router-dom'
import {useState} from 'react'
type Props = {
 

}

const Main = (props: Props) => {
  const [open,setOpen] = useState(false)
  return (
    <div>
        <Header open={open} setOpen={setOpen}/>
        <SideBar open={open}/>
        <main style={{}}>
          
            <Outlet/>
        </main>
    </div>
  )
}

export default Main