import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box,Paper,BottomNavigation,BottomNavigationAction } from '@mui/material'
import { AddLocationAlt, LocationOn, TempleHindu } from '@mui/icons-material'
import ClusteredMap from './map/ClusteredMap'
import Pilgrims from './pilgrims/Pilgrims'
import AddPilgrims from './AddPilgrims'
import Protected from './protected/protected'


const AddLocation = () => {
    const [value,setValue] = useState(0)
    const ref = useRef()
    useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0
    },[value])
  return (
    <>
    <Navbar />
    <div className='add-bar'>
    <Box 
        sx={{
            height:700,
            position:'relative'
        }}
        ref={ref}>
            {{
            0: <ClusteredMap /> ,  
            1: <Pilgrims /> , 
            2: <Protected><AddPilgrims setPage={setValue} /></Protected>
            }[value]}
    <Paper
    elevation={3}
    sx={{position:'fixed',bottom:0, left:0, right:0, zIndex:2}}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(e, newValue) => setValue(newValue)}>
            <BottomNavigationAction label='Map' icon={<LocationOn />}/>
            <BottomNavigationAction label='PilGrims' icon={<TempleHindu />}/>
            <BottomNavigationAction label='Add' icon={<AddLocationAlt />}/>
        </BottomNavigation>
    </Paper>
    </Box>    
            </div>
    <Footer />
    </>  )
}
export default AddLocation