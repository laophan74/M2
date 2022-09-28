import { Button } from '@mui/material'
import React from 'react'

const SliderBtn = ({icon, text}) => {
  return (
    <Button sx={{justifyContent:'flex-start', paddingLeft:5, height:50}} startIcon={icon}>
        {text}
    </Button>
  )
}

export default SliderBtn