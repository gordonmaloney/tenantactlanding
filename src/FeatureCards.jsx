import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography, Box
} from '@mui/material';

import img1 from './imgs/img1.jpeg'
import img2 from './imgs/img2.jpeg'
import img3 from './imgs/img3.jpeg'
import img4 from './imgs/img4.jpeg'
import GreenOverlayImage from './Components/ImgOverlay';

const features = [
  {
    text: 'Pressure councillors to vote for a key motion',
    image: img1, // replace with your image URL
  },
  {
    text: 'Respond en masse to a consultation or survey',
    image: img2
  },
  {
    text: 'Pile pressure on a member defence target',
    image: img3
  },
  {
    text: 'Shower politicians with personalised member stories',
    image: img4
  },
];

export default function FeatureCards() {
  return (
    <Grid container spacing={2}>



<Grid item xs={12} md={6}
>


<Grid container spacing={2}>

      {features.slice(0,3).map((feature, idx) => (
         


<Grid item key={idx} sx={{width: '100%'}}>

         
         <Card sx={{ display: 'flex', width: '100%', height: 100 }}>
      {/* Left side: the image */}

      <GreenOverlayImage 
            src={feature.image}
            alt={feature.text}
         //   border_radius={'10px'}
            height={'100%'}
            width={100}
            />

      {/* Right side: text content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent>

<h3 style={{margin: 0}}>        {feature.text}</h3>    
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            This is some description text next to the image.
          </Typography>
        </CardContent>
      </Box>
    </Card>
         
         </Grid>

     
      ))}
      </Grid>
        </Grid>

<Grid item xs={12} md={6} 
> 

</Grid>

    </Grid>
  );
}
