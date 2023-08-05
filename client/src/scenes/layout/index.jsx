import React,{useState} from 'react'
import { Box,useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { UseSelector  } from 'react-redux/es/hooks/useSelector'
import Navbar from "components/Navbar"
const Layout = () => {
  return (
    <Box width="100%" height="100%" sx = {{display:"flex"}}>
        <Box>
            <Navbar />
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout