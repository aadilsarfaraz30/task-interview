import React, { useState } from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'yellow',
    ...theme.typography.body2,
    padding: theme.spacing(9),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(4)
}));
  

const GridContainer = () => {
  const [selected, setSelected] = useState()
return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(9)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} >
            <Item sx={{background: selected === index ? 'red' : 'yellow'}} onClick={() => setSelected(index)} elevation={5} >Box {index}</Item>
          </Grid>
         ))}
      </Grid>
    </Box>
  )
}

export default GridContainer