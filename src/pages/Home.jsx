import React from 'react'
import styled from 'styled-components'
import { Box,  Card, Typography } from '@mui/material'
import TopBar from '../components/TopBar'
import UserContainer from '../components/UserContainer'
import DashboardIcon from '@mui/icons-material/Dashboard';
import WidgetsIcon from '@mui/icons-material/Widgets';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import BarChartIcon from '@mui/icons-material/BarChart';
import Datagrid from '../components/Datagrid'
import SliderBtn from '../components/SliderBtn'
import SearchField from '../components/SearchField'
import OpenDialog from '../components/OpenDialog'

const Home = () => {
  return (
    <>
    <LeftContainer>
      <UserContainer/>
      <Typography color={'primary'} sx={{fontSize:17, paddingLeft:5, paddingTop:1, height:30}}>CONTENT 1</Typography>
      <SliderBtn text={'DashBoard'} icon={<DashboardIcon/>}/>
      <SliderBtn text={'List'} icon={<FolderOpenIcon/>}/>
      <SliderBtn text={'Widget'} icon={<WidgetsIcon/>}/>
      <SliderBtn text={'Chart'} icon={<BarChartIcon/>}/>
      
      <Typography color={'primary'} sx={{fontSize:17, paddingLeft:5, paddingTop:1, height:30}}>CONTENT 2</Typography>
      <SliderBtn text={'DashBoard'} icon={<DashboardIcon/>}/>
      <SliderBtn text={'List'} icon={<FolderOpenIcon/>}/>
      <SliderBtn text={'Widget'} icon={<WidgetsIcon/>}/>

      <Typography color={'primary'} sx={{fontSize:17, paddingLeft:5, paddingTop:1, height:30}}>CONTENT 3</Typography>
      <SliderBtn text={'DashBoard'} icon={<DashboardIcon/>}/>
      <SliderBtn text={'List'} icon={<FolderOpenIcon/>}/>
      <SliderBtn text={'Widget'} icon={<WidgetsIcon/>}/>
    </LeftContainer>
    <RightContainer>
      <TopBar/>

      <MainContainer>
        <Box sx={{display: 'flex', flexDirection: 'row', margin:5, justifyContent:'space-between'}}>
          <Typography sx={{color:'gray',fontSize:20}}>List of Members</Typography>
          <SearchField/>
          <OpenDialog/>
        </Box>
          <Card sx={{margin:5}}>
            <Datagrid/>

          </Card>
      </MainContainer>

    </RightContainer>
    </>
  )
}

const RightContainer = styled.div`
  flex-direction:column;
  display:flex;
  width:80%;
  padding-left:20%;
`
const LeftContainer = styled.div`
  flex-direction:column;
  display:flex;
  position:fixed;
  left:0;
  width:20%;
  height:100%;
  background-color:#0f141c;
`
const MainContainer = styled.div`
`
export default Home